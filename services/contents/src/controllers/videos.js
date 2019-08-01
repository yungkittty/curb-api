const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const uuidv4 = require('uuid/v4');
const axios = require('axios');
const create = require('../services/content-create');
const Content = require('../models/content');
const { ApiError } = require('../configurations/error');
const { OtherServiceError } = require('../configurations/error');
const groupContentPost = require('../utils/group-content-post');
const middlewares = require('../middleswares');

const videos = express();

/**
 *
 * @api {POST} /texts/:groupId/ CONTENT ADD VIDEO
 * @apiName CONTENTS3
 * @apiGroup CONTENTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId //
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
    if (!file.originalname.toLowerCase().match(/\.(mp4|avi)$/)) {
      callback(new ApiError('CONTENTS_INVALID_TYPE'));
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

videos.post(
  '/:groupId/',
  middlewares.permissions,
  upload.single('file'),
  async (req, res, next) => {
    try {
      if (!req.permissions.write) return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));

      const content = await create(
        'video',
        req.params.groupId,
        req.authId,
        `/contents/uploads/groups/${req.params.groupId}/videos/${req.authId}/${req.file.filename}`
      );
      if (!content) return next(new ApiError('CONTENTS_INEXISTENT_CONTENT'));

      const response = await groupContentPost(
        req.cookies.token,
        req.params.groupId,
        content.id,
        req.authId
      );
      if (response.status !== 200) {
        await Content.findByIdAndRemove(content.id);
        throw new OtherServiceError(response.data.service, response.data.code, response.status);
      }

      return res.status(200).json({
        id: content.id,
        file: content.data
      });
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = videos;
