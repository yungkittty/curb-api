const axios = require('axios');
const trending = require('../services/trending');
const { ApiError, OtherServiceError } = require('../configurations/error');

/**
 *
 * @api {POST} /groups/rending GROUPS TRENDING
 * @apiName GROUPS14
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} id queryParam
 *
 *
 * @apiSuccess (200) {Object} group public field of the group
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     ...group: {Object}
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError GROUP_NOT_FOUND 400
 * @apiError FORBIDEN_READ 403
 * @apiError OTHER_SERVICE_ERROR XXX
 *
 */

async function groupRead(req, res, next) {
  try {
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupRead;
