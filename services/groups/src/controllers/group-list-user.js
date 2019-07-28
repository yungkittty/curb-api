const listUser = require('../services/list-user');

/**
 *
 * @api {GET} /groups/list-user/:groupId GROUPS LIST USERS
 * @apiName GROUPS18
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 * @apiDescription
 * <h4>List of users in a group</h4><br>
 *
 * @apiParam {Number} [count=10] queryParam
 * @apiParam {Number} [page=1] queryParam
 * @apiParam {Boolean} [active] queryParam can only pass true
 * @apiParam {Cookie} userId
 *
 * @apiSuccess (200) {Object} list of userIds
 *
 *
 * @apiSuccessExample {json} Success-Response:
    {
      "count": 3,
      "page": 1,
      "data": [
            "5cddae77011c6207cff1ad51",
            "5cdda92c011c6207cff1ad30",
            "5cdd3a15011c6207cff1ad2a",
      ]
    }
 * @apiError BAD_PARAMETER 400
 * @apiError OTHER_SERVICE_ERROR XXX
 *
 */

async function groupListRandom(req, res, next) {
  try {
    const response = await listUser({
      page: req.query.page ? parseInt(req.query.page, 10) : undefined,
      count: req.query.count ? parseInt(req.query.count, 10) : undefined,
      active: req.query.active,
      groupId: req.params.groupId,
      userId: req.authId
    });
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupListRandom;
