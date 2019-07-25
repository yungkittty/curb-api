const listFromId = require('../services/list-from-id');

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
 * @apiSuccess (200) {Object} Object
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
    const groupIds = JSON.parse(req.query.groupIds);
    const userId = req.authId;
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
