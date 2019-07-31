const express = require('express');
const axios = require('axios');
const create = require('../services/content-create');
const Content = require('../models/content');
const { ApiError } = require('../configurations/error');
const { OtherServiceError } = require('../configurations/error');
const postGroupContent = require('../utils/post-group-content');

const texts = express();

/**
 *
 * @api {POST} /texts/:groupId/:userId CONTENT ADD TEXT
 * @apiName CONTENTS1
 * @apiGroup CONTENTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId //
 * @apiParam  {String} userId //
 * @apiParam  {String} data text
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     data: '${textInput}',
 * }
 *
 * @apiSuccess (200) {String} id id of the created content
 * @apiSuccess (200) {String} data text of the created content
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

texts.use('/:groupId/:userId', async (req, res, next) => {
  if (!req.params.groupId || !req.params.userId || !req.body.data) return next(new ApiError('CONTENTS_BAD_PARAMETER'));
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

texts.post('/:groupId/:userId', async (req, res, next) => {
  try {
    const check = await create('text', req.params.groupId, req.params.userId, req.body.data);
    if (!check) return next(new ApiError('CONTENTS_INEXISTENT_CONTENT'));

    const response = await postGroupContent(
      req.cookies.token,
      req.params.groupId,
      check.id,
      req.params.userId
    );
    if (response.status !== 200) {
      await Content.findByIdAndRemove(check.id);
      throw new OtherServiceError(response.data.service, response.data.code, response.status);
    }

    return res.status(200).json({
      id: check.id,
      data: check.data
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = texts;
