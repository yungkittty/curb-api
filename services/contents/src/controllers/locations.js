const express = require('express');
const addContent = require('../services/content/content-add');
const { ApiError } = require('../configurations/error');
const middlewares = require('../middleswares');

const locations = express();

/**
 *
 * @api {POST} /locations/:postId/ CONTENT UPLOAD LOCATIONS
 * @apiName CONTENTS4
 * @apiGroup CONTENTS
 * @apiVersion  0.2.0
 *
 *
 * @apiParam  {String} postId //
 * @apiParam  {String} data locations data
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     data: '${locationsInput}',
 * }
 *
 * @apiSuccess (200) {String} id contentId
 * @apiSuccess (200) {String} data location
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     data: '${locationsInput}'
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

locations.post(
  '/:postId',
  middlewares.permissions,
  middlewares.mediaType,
  async (req, res, next) => {
    try {
      if (!req.permissions.write) {
        return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));
      }

      const content = await addContent(
        'location',
        req.params.postId,
        req.authId,
        req.body.data
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

module.exports = locations;
