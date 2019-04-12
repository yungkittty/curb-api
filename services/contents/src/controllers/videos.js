const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const uuidv4 = require('uuid/v4');
const axios = require('axios');
const create = require('../services/content-create');
const Content = require('../models/content');
const { ApiError } = require('../configurations/error');
const { OtherServiceError } = require('../configurations/error');

const videos = express();

/**
 *
 * @api {POST} /texts/:groupId/:userId CONTENT ADD VIDEO
 * @apiName CONTENTS3
 * @apiGroup CONTENTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId //
 * @apiParam  {String} userId //
 * @apiParam  {String} file file path
 *
 * @apiParamExample  {form-data} Request-Example:
 * {
 *     file: '${videoPath}',
 * }
 *
 * @apiSuccess (200) {String} id id of the created content
 * @apiSuccess (200) {String} file file path of the created content
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     file: '/contents/uploads/groups/${groupId}/videos/${userId}/${filename}'
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

const upload = multer({
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(mp4|MP4|avi|AVI)$/)) {
      callback(new ApiError('Only video files are allowed'));
    }
    callback(null, true);
  },
  limits: {
    fieldSize: process.env.VIDEO_LIMIT_SIZE * 1024 * 1024
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      const path = `./uploads/groups/${req.params.groupId}/videos/${req.params.userId}`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      callback(null, `${uuidv4()}.${file.originalname.split('.').reverse()[0]}`);
    }
  })
});

videos.use('/:groupId/:userId', async (req, res, next) => {
  if (!req.params.groupId || !req.params.userId) return next(new ApiError('CONTENTS_BAD_PARAMETER'));
  try {
    if (req.authId !== req.params.userId) {
      return next(new ApiError('CONTENTS_FORBIDEN_OPERATION'));
    }
    const response = await axios.get(
      `http://curb-groups:4000/permissions/${req.params.groupId}/${req.params.userId}`
    );
    if (response.status !== 200) {
      throw new OtherServiceError(response.data.service, response.data.code, response.status);
    }
    if (!response.data.write) return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));
    return next();
  } catch (error) {
    return next(error);
  }
});

videos.post('/:groupId/:userId', upload.single('file'), async (req, res, next) => {
  try {
    const check = await create(
      'video',
      req.params.groupId,
      req.params.userId,
      `/contents/uploads/groups/${req.params.groupId}/videos/${req.params.userId}/${
        req.file.filename
      }`
    );
    if (!check) return next(new ApiError('CONTENTS_INEXISTENT_CONTENT'));
    const response = await axios({
      method: 'post',
      headers: { Cookie: `token=${req.cookies.token}` },
      data: { type: 'video' },
      url: `http://curb-groups:4000/medias/${req.params.groupId}/${check.id}`,
      validateStatus: undefined
    });
    if (response.status !== 200) {
      await Content.findByIdAndRemove(check.id);
      throw new OtherServiceError(response.data.service, response.data.code, response.status);
    }
    return res.status(200).json({
      id: check.id,
      file: check.data
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = videos;
