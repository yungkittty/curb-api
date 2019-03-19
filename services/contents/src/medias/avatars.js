const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs-extra');
const uuidv4 = require('uuid/v4');
const axios = require('axios');
const Path = require('path');
const directoryExists = require('directory-exists');

const avatar = express();

const userUpload = multer({
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
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
      callback(
        null,
        `${uuidv4()}.${file.originalname.split('.').reverse()[0]}`
      );
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
      callback(
        null,
        `${uuidv4()}.${file.originalname.split('.').reverse()[0]}`
      );
    }
  })
});

avatar.use('/groups/:groupId', async (req, res, next) => {
  if (!req.params.groupId || !req.headers.authorization) res.status(400).end();
  try {
    const response = await axios({
      method: 'post',
      headers: { Authorization: req.headers.authorization },
      url: 'http://curb-accounts:4000/validate',
      validateStatus: undefined
    });
    if (response.status !== 200) {
      return res.status(response.status).end();
    }
    const rep = await axios({
      method: 'get',
      headers: { Authorization: req.headers.authorization },
      url: `http://curb-groups:4000/permissions/${req.params.groupId}/${
        response.data.id
      }`,
      validateStatus: undefined
    });
    if (rep.status !== 200 || !rep.data.creator) {
      return res.status(rep.status).end();
    }
    const result = await directoryExists(
      `./uploads/avatars/groups/${req.params.groupId}`
    );
    if (result) {
      const files = await fs.readdir(
        `./uploads/avatars/groups/${req.params.groupId}`
      );
      files.forEach(file => fs.unlink(
        Path.join(`./uploads/avatars/groups/${req.params.groupId}`, file)
      ));
    }
    return next();
  } catch (error) {
    return res.status(400).end();
  }
});

avatar.use('/users/:userId', async (req, res, next) => {
  if (!req.params.userId || !req.headers.authorization) res.status(400).end();
  try {
    const response = await axios({
      method: 'post',
      headers: { Authorization: req.headers.authorization },
      url: 'http://curb-accounts:4000/validate',
      validateStatus: undefined
    });
    if (response.status !== 200 || response.data.id !== req.params.userId) {
      return res.status(response.status).end();
    }
    const result = await directoryExists(
      `./uploads/avatars/users/${req.params.userId}`
    );
    if (result) {
      const files = await fs.readdir(
        `./uploads/avatars/users/${req.params.userId}`
      );
      files.forEach(file => fs.unlink(
        Path.join(`./uploads/avatars/users/${req.params.userId}`, file)
      ));
    }
    console.log('Check right to upload user avatar here'); // eslint-disable-line
    return next();
  } catch (error) {
    return res.status(400).end();
  }
});

avatar.post(
  '/groups/:groupId',
  groupUpload.single('file'),
  async (req, res) => {
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
        url: `http://curb-groups:4000/avatar/${req.params.groupId}`,
        validateStatus: undefined
      });
      if (response.status !== 200) return res.status(400).end();
      return res.status(200).end();
    } catch (error) {
      res.status(400).end();
    }
    return res.status(200).end();
  }
);

avatar.post('/users/:userId', userUpload.single('file'), async (req, res) => {
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
        avatarUrl: `/${process.env.SERVICE_NAME}/${process.env.AVATAR_DIRECTORIES_USER_PATH}/${req.params.userId}/medium${ext}`
      },
      url: `http://curb-users:4000/avatar/${req.params.userId}`,
      validateStatus: undefined
    });
    if (response.status !== 200) return res.status(400).end();
    return res.status(200).json({ avatarUrl: `/${process.env.SERVICE_NAME}/${process.env.AVATAR_DIRECTORIES_USER_PATH}/${req.params.userId}/medium${ext}` });
  } catch (error) {
    res.status(400).end();
  }
  return res.status(200).end();
});

module.exports = avatar;
