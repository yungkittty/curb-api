const axios = require('axios');
const listFromId = require('../services/list-from-id');
const { OtherServiceError } = require('../configurations/error');
/**
 *
 * @api {GET} /groups/list GROUPS LIST FROM GROUP IDS
 * @apiName GROUPS20
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 * @apiDescription
 * <h4>List for multiple id </h4><br>
 *
 * @apiParam {Number} [groupIds] queryParam
 *
 * @apiSuccess (200) {Object}
 *
 *
 * @apiSuccessExample {json} Success-Response:
{

}
 * @apiError BAD_PARAMETER 400
 * @apiError OTHER_SERVICE_ERROR XXX
 *
 */

async function groupListFromId(req, res, next) {
  try {
    console.log('LIST FROM IDS');
    console.log(req.query.groupIds, typeof req.query.groupIds);
    let getUserResponse;
    if (req.cookies.token) {
      getUserResponse = await axios({
        method: 'post',
        withCredentials: true,
        headers: { Cookie: `token=${req.cookies.token}` },
        url: 'http://curb-accounts:4000/validate',
        validateStatus: undefined
      });
      if (getUserResponse.status !== 200) {
        return next(
          new OtherServiceError(
            getUserResponse.data.service,
            getUserResponse.data.code,
            getUserResponse.status
          )
        );
      }
    }
    const userId = !getUserResponse ? undefined : getUserResponse.data.id;
    const groupIds = JSON.parse(req.query.groupIds);
    const response = await listFromId(groupIds, userId);
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupListFromId;
