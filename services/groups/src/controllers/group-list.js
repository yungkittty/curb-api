const axios = require('axios');
const list = require('../services/list');
const { OtherServiceError } = require('../configurations/error');

/**
 *
 * @api {GET} /groups/ GROUPS DISCOVERY
 * @apiName GROUPS10
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam {String} [userId] QueryParam
 * @apiParam {String} [creatorId] QueryParam
 * @apiParam {String} [page=5] QueryParam
 * @apiParam {String} [count=5] QueryParam
 * @apiParam [String] [groupIds] QueryParam
 * @apiSuccess (200) [String] groups list of groupId
 *
 * @apiParamExample  {json} Request-Example:
 *  http://localhost:4000/groups/?creatorId=5c38bfd8550c200020b1aa2a&userId=5c38bfd8550c200020b1aa2a&count=5&page=10
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     groups: [String]
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError OTHER_SERVICE XXX
 * @apiError UNDEFINED 500
 *
 */

async function groupList(req, res, next) {
  try {
    let authResponse;
    if (req.cookies.token) {
      authResponse = await axios({
        method: 'post',
        withCredentials: true,
        headers: { Cookie: `token=${req.cookies.token}` },
        url: 'http://curb-accounts:4000/validate',
        validateStatus: undefined
      });
      if (authResponse.status !== 200) {
        return next(new OtherServiceError(authResponse));
      }
    }
    const authId = !authResponse || !authResponse.status ? undefined : authResponse.data.id;
    const response = await list({
      ...req.query,
      count: req.query.count ? parseInt(req.query.count, 10) : undefined,
      authId
    });
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupList;
