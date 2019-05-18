const { globalTrending, customizeTrending } = require('../services/');

/**
 *
 * @api {GET} /groups/trending GROUPS TRENDING
 * @apiName GROUPS14
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 * @apiDescription
 * <h4>GlobalTrending: if no parameter are given it will return the global trending.</h4>
 * <h4>CustomizeTrending: if you give userId return the global trending
 * and the custom trending.</h4><br>
 *
 * @apiParam {String} [userId] queryParam, customizeTrending
 * @apiParam {Number} [count=100] queryParam
 *
 * @apiSuccess (200) {Object} group public field of the group
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 *  {
 *    category: 'global',
 *    data: [String]
 *  },
 *  {
 *    category: '${mediaType}', // image, video, location, text
 *    data: [String]
 *  }
 *  // if userId
 *  {
 *    category: 'custom',
 *    data: [String]
 *  }
 * ]
 *
 * @apiSuccessExample {json} Success-Response:
 * [
    {
        "category": "global",
        "groups": [
            "5cd59912f3e3eb001d77fb06",
            "5cd7f182fda0fb001c92cd56",
            "5cb7533c2db80f001d431464"
        ]
    },
    {
        "category": "location",
        "groups": [
            "5cd59912f3e3eb001d77fb06",
            "5cb7533c2db80f001d431464"
        ]
    },
    {
        "category": "image",
        "groups": [
            "5cd7f182fda0fb001c92cd56"
        ]
    },
    {
        "category": "text",
        "groups": [
            "5cd59912f3e3eb001d77fb06",
            "5cd7f182fda0fb001c92cd56",
            "5cb7533c2db80f001d431464"
        ]
    },
    {
        "category": "video",
        "groups": []
    }
]
 * @apiError BAD_PARAMETER 400
 * @apiError OTHER_SERVICE_ERROR XXX
 *
 */

async function groupTrending(req, res, next) {
  try {
    let response;
    const count = req.query.count && parseInt(req.query.count, 10) < 100 ? parseInt(req.query.count, 10) : 100;
    response = await globalTrending(count);
    if (req.query.userId) {
      const customize = await customizeTrending(count, req.query.userId);
      response = [...response, customize];
    }
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupTrending;
