const axios = require('axios');
const read = require('../services/read');
const { ApiError, OtherServiceError } = require('../configurations/error');

/**
 *
 * @api {POST} /groups/:id GROUPS READ BY ID
 * @apiName GROUPS3
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
  if (!req.params.id) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    let response;
    if (req.cookies.token) {
      response = await axios({
        method: 'post',
        withCredentials: true,
        headers: { Cookie: `token=${req.cookies.token}` },
        url: 'http://curb-accounts:4000/validate',
        validateStatus: undefined
      });
      if (response.status !== 200) {
        return next(
          new OtherServiceError(response.data.service, response.data.code, response.status)
        );
      }
    }
    const userId = !response ? undefined : response.data.id;
    const group = await read(req.params.id, userId);
    return res
      .status(200)
      .json(group)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupRead;
