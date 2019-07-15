const _ = require('lodash/fp');
const { globalTrending, customizeTrending } = require('../services/');

/**
 *
 * @api {GET} /groups/trending GROUPS LIST CUSTOM
 * @apiName GROUPS15
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 * @apiDescription
 * <h4>List for custom section </h4><br>
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

async function groupListCustom(req, res, next) {
  try {
    const count = req.query.count && parseInt(req.query.count, 10) < 100 ? parseInt(req.query.count, 10) : 100;
    const response = await globalTrending(count);
    if (req.query.userId) {
      const customize = await customizeTrending(count, req.query.userId);
      response.splice(1, 0, customize);
    }

    // TODO fix for @woivre, refacto format in service.
    const formatted = response.map(obj => ({ ...obj, data: [{ groups: obj.data }] }));
    return res
      .status(200)
      .json(formatted)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupListCustom;
