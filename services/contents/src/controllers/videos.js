const express = require('express');
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
  middlewares.mediaType,
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
