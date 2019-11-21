const express = require('express');
const addContent = require('../services/content/content-add');
const { ApiError } = require('../configurations/error');
const middlewares = require('../middleswares');

const polls = express();

/**
 *
 * @api {POST} /polls/:postId/ CONTENT UPLOAD POLLS
 * @apiName CONTENTS7
 * @apiGroup CONTENTS
 * @apiVersion  0.2.0
 *
 *  @apiParam  {String} postId //
 *  @apiParam  {String} data UTCSTRNG date.toUTCString() and eventName, data doit être un json
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     data: "{\"question\": \"TOOT?\", \"options\": [\"toto\", \"no\"]}"
 * }
 *
 * @apiSuccess (200) {String} id contentId
 * @apiSuccess (200) {String} data UTCSTRNG date.toUTCString() and eventName
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     data: "{\"question\": \"TOOT?\", \"options\": [\"toto\", \"no\"]}"
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

polls.post('/:postId', middlewares.permissions, async (req, res, next) => {
  try {
    if (!req.permissions.write) {
      return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));
    }

    const content = await addContent(
      'polls',
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
});

polls.post(
  '/vote/:contentId',
  middlewares.permissions,
  async (req, res, next) => {
    try {
      if (!req.permissions.write) {
        return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));
      }

      // const response = await join(req.params.contentId, req.authId);
      return res.status(200).json();
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = polls;
