const express = require('express');
const addContent = require('../services/content/content-add');
const { ApiError } = require('../configurations/error');
const middlewares = require('../middleswares');

const texts = express();

/**
 *
 * @api {POST} /texts/:postId/ CONTENT UPLOAD TEXT
 * @apiName CONTENTS1
 * @apiGroup CONTENTS
 * @apiVersion  0.2.0
 *
 *
 * @apiParam  {String} postId //
 * @apiParam  {String} data text
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     data: '${textInput}',
 * }
 *
 * @apiSuccess (200) {String} id contentId
 * @apiSuccess (200) {String} data text
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     data: '${textInput}'
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

texts.post('/:postId', middlewares.permissions, async (req, res, next) => {
  try {
    if (!req.permissions.write) {
      return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));
    }

    const content = await addContent('text', req.params.postId, req.authId, req.body.data);
    if (!content) return next(new ApiError('CONTENTS_INEXISTENT_CONTENT'));
    return res.status(200).json({
      id: content.id,
      data: content.data
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = texts;
