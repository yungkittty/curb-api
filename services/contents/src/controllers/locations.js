const express = require('express');
const axios = require('axios');
const create = require('../services/content-create');
const Content = require('../models/content');
const { ApiError } = require('../configurations/error');
const { OtherServiceError } = require('../configurations/error');
const groupContentPost = require('../utils/group-content-post');
const middlewares = require('../middleswares');

const locations = express();

/**
 *
 * @api {POST} /locations/:groupId/ CONTENT ADD LOCATIONS
 * @apiName CONTENTS4
 * @apiGroup CONTENTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId //
 * @apiParam  {String} data locations data
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     data: '${locationsInput}',
 * }
 *
 * @apiSuccess (200) {String} id id of the created content
 * @apiSuccess (200) {String} data locations data of the created content
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

locations.post('/:groupId/', middlewares.permissions, async (req, res, next) => {
  try {
    if (!req.permissions.write) return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));

    const content = await create('location', req.params.groupId, req.authId, req.body.data);
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
      data: content.data
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = locations;
