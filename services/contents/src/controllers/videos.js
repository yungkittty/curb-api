const express = require('express');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const Path = require('path');
const { upload, fileFilter } = require('../configurations/multer');
const addContent = require('../services/content/content-add');
const { ApiError } = require('../configurations/error');
const middlewares = require('../middleswares');

const videos = express();

/**
 *
 * @api {POST} /texts/:postId/ CONTENT UPLOAD VIDEO
 * @apiName CONTENTS3
 * @apiGroup CONTENTS
 * @apiVersion  0.2.0
 *
 *
 * @apiParam  {String} postId //
 * @apiParam  {String} file file path
 *
 * @apiParamExample  {form-data} Request-Example:
 * {
 *     file: '${videoPath}',
 * }
 *
 * @apiSuccess (200) {String} id contentId
 * @apiSuccess (200) {String} data urlPath
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     data: '/contents/uploads/groups/${groupId}/videos/${postId}/${filename}'
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

videos.post(
  '/:postId',
  middlewares.permissions,
  upload('videos', fileFilter(/\.(mp4|avi)$/)),
  async (req, res, next) => {
    try {
      if (!req.permissions.write) {
        return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));
      }
      const content = await addContent(
        'video',
        req.params.postId,
        req.authId,
        req.urlPath
      );

      if (!content) return next(new ApiError('CONTENTS_INEXISTENT_CONTENT'));
      const ext = Path.extname(req.file.originalname);
      const nameSplit = req.file.filename.split('.');
      console.log('ORIGINAL NAME :', req.file.originalname);
      console.log('PATH BEFORE NAME : ', req.filePath);
      console.log(
        'FICHIER 360p : ',
        `${req.filePath}/${nameSplit[0]}_low${ext}`
      );
      console.log('LE NOM IMPORTANT DU FICHIER : ', req.file.filename);
      ffmpeg.setFfmpegPath(ffmpegPath);
      const command = ffmpeg(req.file.path);
      // .audioCodec('libfaac')
      // .videoCodec('libx264');
      command
        .clone()
        // .videoBitrate(400, true)
        .size('?x360')
        .save(`${req.filePath}/${nameSplit[0]}_low${ext}`);
      command
        .clone()
        // .videoBitrate(1500, true)
        .size('?x480')
        .save(`${req.filePath}/${nameSplit[0]}_medium${ext}`);
      command
        .clone()
        // .videoBitrate(4000, true)
        .size('?x720')
        .save(`${req.filePath}/${nameSplit[0]}_high${ext}`);
      return res.status(200).json({
        id: content.id,
        data: content.data
      });
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = videos;
