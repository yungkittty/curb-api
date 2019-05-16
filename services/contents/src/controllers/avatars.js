const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs-extra');
const uuidv4 = require('uuid/v4');
const axios = require('axios');
const Path = require('path');
const directoryExists = require('directory-exists');
const { ApiError } = require('../configurations/error');
const { OtherServiceError } = require('../configurations/error');

const avatar = express();

/**
 *
 * @api {POST} /avatars/${groups/users}/:id  AVATARS FOR GROUPS/USERS
 * @apiName USERS5
 * @apiGroup CONTENTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} id GROUP/USER id
 * @apiParam  {String} file avatar file path from user
 *
 * @apiParamExample  {form-data} Request-Example:
 * {
 *     file: ${avatarPath}
 * }
 *
 * @apiSuccess (200) {String} avatarUrl //
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     avatarUrl: '/contents/uploads/avatars/${groupId/userId}/medium.${extension}'
 * }
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_NOT_GROUP_CREATOR 403
 * @apiError UNDEFINED 500
 *
 */

const userUpload = multer({
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/)) {
      callback(new Error('Only image files are allowed'));
    }
    callback(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      const path = `./uploads/avatars/users/${req.params.userId}`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      callback(null, `${uuidv4()}.${file.originalname.split('.').reverse()[0]}`);
    }
  })
});

const groupUpload = multer({
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      callback(new Error('Only image files are allowed'));
    }
    callback(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      const path = `./uploads/avatars/groups/${req.params.groupId}`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      callback(null, `${uuidv4()}.${file.originalname.split('.').reverse()[0]}`);
    }
  })
});

avatar.use('/groups/:groupId', async (req, res, next) => {
  if (!req.params.groupId) return next(new ApiError('CONTENTS_BAD_PARAMETER'));
  try {
    const rep = await axios({
      method: 'get',
      headers: { Cookie: `token=${req.cookies.token}` },
      url: `http://curb-groups:4000/permissions/${req.params.groupId}/${req.authId}`,
      validateStatus: undefined
    });
    if (rep.status !== 200) {
      throw new OtherServiceError(rep.data.service, rep.data.code, rep.data.status);
    }
    if (!rep.data.creator) {
      return next(new ApiError('CONTENTS_NOT_GROUP_CREATOR'));
    }
    const result = await directoryExists(`./uploads/avatars/groups/${req.params.groupId}`);
    if (result) {
      const files = await fs.readdir(`./uploads/avatars/groups/${req.params.groupId}`);
      files.forEach(file => fs.unlink(Path.join(`./uploads/avatars/groups/${req.params.groupId}`, file)));
    }
    return next();
  } catch (error) {
    return next(error);
  }
});

avatar.use('/users/:userId', async (req, res, next) => {
  if (!req.params.userId) return next(new ApiError('CONTENTS_BAD_PARAMETER'));
  try {
    if (req.params.userId !== req.authId) {
      throw new ApiError('CONTENTS_FORBIDEN_OPERATION');
    }
    // if (response.status !== 200 || response.data.id !== req.params.userId) {
    //   throw new OtherServiceError(response.data.service, response.data.code, response.status);
    // }
    const result = await directoryExists(`./uploads/avatars/users/${req.authId}`);
    if (result) {
      const files = await fs.readdir(`./uploads/avatars/users/${req.authId}`);
      files.forEach(file => fs.unlink(Path.join(`./uploads/avatars/users/${req.authId}`, file)));
    }
    return next();
  } catch (error) {
    return next(error);
  }
});

avatar.post('/groups/:groupId', groupUpload.single('file'), async (req, res, next) => {
  const ext = Path.extname(req.file.originalname);
  try {
    await sharp(req.file.path)
      .resize(
        parseInt(process.env.AVATAR_SIZE_EXTRA_SMALL, 10),
        parseInt(process.env.AVATAR_SIZE_EXTRA_SMALL, 10)
      )
      .toFile(`./uploads/avatars/groups/${req.params.groupId}/extra_small${ext}`);
    await sharp(req.file.path)
      .resize(
        parseInt(process.env.AVATAR_SIZE_SMALL, 10),
        parseInt(process.env.AVATAR_SIZE_SMALL, 10)
      )
      .toFile(`./uploads/avatars/groups/${req.params.groupId}/small${ext}`);
    await sharp(req.file.path)
      .resize(
        parseInt(process.env.AVATAR_SIZE_MEDIUM, 10),
        parseInt(process.env.AVATAR_SIZE_MEDIUM, 10)
      )
      .toFile(`./uploads/avatars/groups/${req.params.groupId}/medium${ext}`);
    await sharp(req.file.path)
      .resize(
        parseInt(process.env.AVATAR_SIZE_LARGE, 10),
        parseInt(process.env.AVATAR_SIZE_LARGE, 10)
      )
      .toFile(`./uploads/avatars/groups/${req.params.groupId}/large${ext}`);
    const response = await axios({
      method: 'post',
      data: {
        avatarUrl: `/${process.env.SERVICE_NAME}/${process.env.AVATAR_DIRECTORIES_GROUP_PATH}/${
          req.params.groupId
        }/medium${ext}`
      },
      url: `http://curb-groups:4000/avatars/${req.params.groupId}`,
      validateStatus: undefined
    });
    if (response.status !== 200) {
      throw new OtherServiceError(response.data.service, response.data.code, response.status);
    }
    return res.status(200).json({
      avatarUrl: `/${process.env.SERVICE_NAME}/${process.env.AVATAR_DIRECTORIES_GROUP_PATH}/${
        req.params.groupId
      }/medium${ext}`
    });
  } catch (error) {
    return next(error);
  }
});

avatar.post('/users/:userId', userUpload.single('file'), async (req, res, next) => {
  const ext = Path.extname(req.file.originalname);
  try {
    await sharp(req.file.path)
      .resize(
        parseInt(process.env.AVATAR_SIZE_EXTRA_SMALL, 10),
        parseInt(process.env.AVATAR_SIZE_EXTRA_SMALL, 10)
      )
      .toFile(`./uploads/avatars/users/${req.params.userId}/extra_small${ext}`);
    await sharp(req.file.path)
      .resize(
        parseInt(process.env.AVATAR_SIZE_SMALL, 10),
        parseInt(process.env.AVATAR_SIZE_SMALL, 10)
      )
      .toFile(`./uploads/avatars/users/${req.params.userId}/small${ext}`);
    await sharp(req.file.path)
      .resize(
        parseInt(process.env.AVATAR_SIZE_MEDIUM, 10),
        parseInt(process.env.AVATAR_SIZE_MEDIUM, 10)
      )
      .toFile(`./uploads/avatars/users/${req.params.userId}/medium${ext}`);
    await sharp(req.file.path)
      .resize(
        parseInt(process.env.AVATAR_SIZE_LARGE, 10),
        parseInt(process.env.AVATAR_SIZE_LARGE, 10)
      )
      .toFile(`./uploads/avatars/users/${req.params.userId}/large${ext}`);
    const response = await axios({
      method: 'post',
      data: {
        avatarUrl: `/${process.env.SERVICE_NAME}/${process.env.AVATAR_DIRECTORIES_USER_PATH}/${
          req.params.userId
        }/medium${ext}`
      },
      url: `http://curb-users:4000/avatars/${req.params.userId}`,
      validateStatus: undefined
    });
    if (response.status !== 200) {
      throw new OtherServiceError(response.data.service, response.data.code, response.status);
    }
    return res.status(200).json({
      avatarUrl: `/${process.env.SERVICE_NAME}/${process.env.AVATAR_DIRECTORIES_USER_PATH}/${
        req.params.userId
      }/medium${ext}`
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = avatar;
