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
 *    data: [{groupId: String}]
 *  },
 *  {
 *    category: '${mediaType}', // image, video, location, text
 *    data: [{groupId: String}]
 *  }
 *  // if userId
 *  {
 *    category: 'custom',
 *    data: [{groupId: String}]
 *  }
 * ]
 *
 * @apiSuccessExample {json} Success-Response:
 * [
    {
        "category": "global",
        "data": [
            {
                "groups": [
                    "5cdcf29e011c6207cff1ad0b",
                    "5cdcf19f9dfda2001dcae884",
                    "5cdcf335011c6207cff1ad1c",
                ]
            }
        ]
    },
    {
        "category": "location",
        "data": [
            {
                "groups": [
                    "5cddae6c011c6207cff1ad4e",
                    "5cddae7c011c6207cff1ad53"
                ]
            }
        ]
    },
    {
        "category": "image",
        "data": [
            {
                "groups": [
                    "5cddae81011c6207cff1ad54",
                    "5ce3dee7e1edb1001c59527e"
                ]
            }
        ]
    },
    {
        "category": "text",
        "data": [
            {
                "groups": [
                    "5cdd9184aff354001c3cbd21",
                    "5cdcf0789dfda2001dcae87e",
                    "5cdd120a2ea0dd001c28953a"
                ]
            }
        ]
    },
    {
        "category": "video",
        "data": [
            {
                "groups": [
                    "5cdd9184aff354001c3cbd21",
                    "5cdcf07c9dfda2001dcae87f",
                    "5cdd120a2ea0dd001c28953a"
                ]
            }
        ]
    },
    {
        "category": "custom",
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

async function groupTrending(req, res, next) {
  try {
    let response;
    const count = req.query.count && parseInt(req.query.count, 10) < 100 ? parseInt(req.query.count, 10) : 100;
    response = await globalTrending(count);
    if (req.query.userId) {
      const customize = await customizeTrending(count, req.query.userId);
      response = [...response, customize];
    }

    // TODO fix for @woivre, refacto format in service.
    const formatted = response.map((obj) => {
      let group;
      group = obj;
      group.data = [{ groups: obj.data }];
      return group;
    });
    return res
      .status(200)
      .json(formatted)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupTrending;
