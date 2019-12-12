const express = require('express');
const addContent = require('../services/content/content-add');
const { ApiError } = require('../configurations/error');
const middlewares = require('../middleswares');
const join = require('../services/content/event-join');
const exit = require('../services/content/event-exit');

const events = express();

/**
 *
 * @api {POST} /events/:postId/ CONTENT UPLOAD EVENTS
 * @apiName CONTENTS6
 * @apiGroup CONTENTS
 * @apiVersion  0.2.0
 *
 *  @apiParam  {String} postId //
 *  @apiParam  {String} data UTCSTRNG date.toUTCString() and eventName, data doit être un json
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     data: "{\"date\": \"Fri, 13 Sep 2019 20:22:04 GMT\", \"name\": \"toto\"}",
 * }
 *
 * @apiSuccess (200) {String} id contentId
 * @apiSuccess (200) {String} data UTCSTRNG date.toUTCString() and eventName
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     data: "{\"date\": \"Fri, 13 Sep 2019 20:22:04 GMT\", \"name\": \"toto\"}"
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

events.post(
  '/:postId',
  middlewares.permissions,
  middlewares.mediaType,
  async (req, res, next) => {
    try {
      if (!req.permissions.write) {
        return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));
      }

      const content = await addContent(
        'event',
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

/**
 *
 * @api {POST} /events/join/:contentId/ CONTENT JOIN EVENTS
 * @apiName CONTENTS9
 * @apiGroup CONTENTS
 * @apiVersion  0.2.0
 *
 *  @apiParam  {String} contentId //
 *
 * @apiSuccess (200) {Object} content
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     data: "{\"date\": \"Fri, 13 Sep 2019 20:22:04 GMT\", \"name\": \"toto\", \"participants\":[\"id\"]}"
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

events.post(
  '/join/:contentId',
  middlewares.permissions,
  async (req, res, next) => {
    try {
      if (!req.permissions.write) {
        return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));
      }

      const response = await join(req.params.contentId, req.authId);
      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }
);

/**
 *
 * @api {POST} /events/exit/:contentId/ CONTENT JOIN EVENTS
 * @apiName CONTENTS10
 * @apiGroup CONTENTS
 * @apiVersion  0.2.0
 *
 *  @apiParam  {String} contentId //
 *
 * @apiSuccess (200) {Object} content
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     data: "{\"date\": \"Fri, 13 Sep 2019 20:22:04 GMT\", \"name\": \"toto\", \"participants\":[\"id\"]}"
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

events.post(
  '/exit/:contentId',
  middlewares.permissions,
  async (req, res, next) => {
    try {
      if (!req.permissions.write) {
        return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));
      }

      const response = await exit(req.params.contentId, req.authId);
      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = events;
