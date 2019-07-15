const listRandom = require('../services/list-random');

/**
 *
 * @api {GET} /groups/trending GROUPS LIST RANDOM
 * @apiName GROUPS17
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 * @apiDescription
 * <h4>List for Random section</h4><br>
 *
 * @apiParam {Number} [count=10] queryParam
 * @apiParam {Number} [page=1] queryParam
 * @apiParam {String} [category] queryParam
 *
 * @apiSuccess (200) {Object} group public field of the group
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * [
    {
      "count": 3,
      "page": 1,
      "data": [
          {
              "groups": [
                  "5cddae77011c6207cff1ad51",
                  "5cdda92c011c6207cff1ad30",
                  "5cdd3a15011c6207cff1ad2a",

              ]
          }
      ]
    }
]
 * @apiError BAD_PARAMETER 400
 * @apiError OTHER_SERVICE_ERROR XXX
 *
 */

async function groupListRandom(req, res, next) {
  try {
    console.log('group-list-random');
    const response = await listRandom({
      page: req.query.page ? parseInt(req.query.page, 10) : undefined,
      count: req.query.count ? parseInt(req.query.count, 10) : undefined,
      category: req.query.category
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
