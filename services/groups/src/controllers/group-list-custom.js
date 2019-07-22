const listCustom = require('../services/list-custom');

/**
 *
 * @api {GET} /groups/list-custom GROUPS LIST CUSTOM
 * @apiName GROUPS15
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 * @apiDescription
 * <h4>List for custom section </h4><br>
 *
 * @apiParam {Number} [count=5] queryParam
 * @apiParam {Number} [page=1] queryParam
 * @apiParam {String} [category] queryParam NOT USED ATM
 * @apiParam {String} [userId] queryParam
 *
 * @apiSuccess (200) {Object} Object
 *
 *
 * @apiSuccessExample {json} Success-Response:
    {
      "count": 3,
      "page": 1,
     "groups": [
        "5d2c710b2b91f5004c54f8da",
        "5d2c76ae24839b009e791e6e",
        "5d2c6c4c97ff050029efc582",
        "5d2c5f4844f800053656838d",
        "5d2c45494cb40d03d44ef286"
    ]
  }
 * @apiError BAD_PARAMETER 400
 * @apiError OTHER_SERVICE_ERROR XXX
 *
 */

async function groupListCustom(req, res, next) {
  try {
    const response = await listCustom({
      page: req.query.page ? parseInt(req.query.page, 10) : undefined,
      count: req.query.count ? parseInt(req.query.count, 10) : undefined,
      category: req.query.category,
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

module.exports = groupListCustom;
