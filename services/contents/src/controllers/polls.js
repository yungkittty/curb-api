const express = require('express');
const addContent = require('../services/content/content-add');
const { ApiError } = require('../configurations/error');
const middlewares = require('../middleswares');
const vote = require('../services/content/polls-vote.js');

const polls = express();

/**
 *
 * @api {POST} /polls/:postId/ CONTENT UPLOAD POLLS
 * @apiName CONTENTS7
 * @apiGroup CONTENTS
 * @apiVersion  0.2.0
 *
 *  @apiParam  {String} postId //
 *  @apiParam  {String} data "question", [options]
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     data: "{\"question\":\"are you ready?\",\"options\":[\"yes\",\"no\",\"maybe\"]}"
 * }
 *
 * @apiSuccess (200) {String} id contentId
 * @apiSuccess (200) {String} data STRING
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     data: "{\"question\":\"are you ready?\",\"options\":[\"yes\",\"no\",\"maybe\"]}"
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

polls.post(
  '/:postId',
  middlewares.permissions,
  middlewares.mediaType,
  async (req, res, next) => {
    try {
      if (!req.permissions.write) {
        return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));
      }

      const content = await addContent(
        'poll',
        req.params.postId,
        req.authId,
        req.body.data
      );
      if (!content) return next(new ApiError('CONTENTS_INEXISTENT_CONTENT'));
      return res
        .status(200)
        .json({
          id: content.id,
          data: content.data
        })
        .end();
    } catch (error) {
      return next(error);
    }
  }
);

/**
 *
 * @api {POST} /polls/:postId/:option CONTENT VOTE POLLS
 * @apiName CONTENTS8
 * @apiGroup CONTENTS
 * @apiVersion  0.2.0
 *
 *  @apiParam  {String} postId //
 *  @apiParam  {String} data option: STRING
 *
 * @apiSuccess (200) {String} id contentId
 * @apiSuccess (200) {String} data STRING
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     data: "{\"question\":\"are you ready?\",\"options\":[\"yes\",\"no\",\"maybe\"], \"answers":[{}]}"
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

polls.post(
  '/vote/:contentId/:option',
  middlewares.permissions,
  async (req, res, next) => {
    try {
      if (!req.permissions.write) {
        return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));
      }
      const response = await vote(
        req.params.contentId,
        req.authId,
        req.params.option
      );
      return res
        .status(200)
        .json(response)
        .end();
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = polls;
