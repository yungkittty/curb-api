const listUser = require('../services/list-user');

/**
 *
 * @api {POST} /users/ USER LISTS
 * @apiName USERS6
 * @apiGroup USERS
 * @apiVersion  0.1.0
 * @apiDescription
 * <h4>List of users</h4><br>
 *
 * @apiParam {Number} [count=10] queryParam
 * @apiParam {Number} [page=1] queryParam
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

async function userList(req, res, next) {
  try {
    const response = await listUser({
      page: req.query.page ? parseInt(req.query.page, 10) : undefined,
      count: req.query.count ? parseInt(req.query.count, 10) : undefined
    });
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = userList;
