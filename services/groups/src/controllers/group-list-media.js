const axios = require('axios');
const listMedia = require('../services/list-media');
const { OtherServiceError } = require('../configurations/error');

/**
 *
 * @api {GET} /groups/list-media GROUPS LIST MEDIA
 * @apiName GROUPS19
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 * @apiDescription
 * <h4>List for media </h4><br>
 *
 * @apiParam {String} [groupId] queryParam
 * @apiParam {Number} [count=5] queryParam
 * @apiParam {Number} [page=1] queryParam
 * @apiParam [String] [mediaType=undefined] queryParam
 * @apiParam {String} [CookieToken=undefine] queryParam in case of a private group
 *
 * @apiSuccess (200) {Object} Object
 *
 *
 * @apiSuccessExample {json} Success-Response:
{
    "count": 10,
    "page": 1,
    "mediaType": "mediaType || undefined",
    "data": [
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

async function groupListMedia(req, res, next) {
  try {
    let response;
    if (req.cookies.token) {
      response = await axios({
        method: 'post',
        withCredentials: true,
        headers: { Cookie: `token=${req.cookies.token}` },
        url: 'http://curb-accounts:4000/validate',
        validateStatus: undefined
      });
      if (response.status !== 200) {
        return next(
          new OtherServiceError(response.data.service, response.data.code, response.status)
        );
      }
    }
    const userId = !response ? undefined : response.data.id;
    const list = await listMedia({
      groupId: req.query.groupId,
      page: req.query.page ? parseInt(req.query.page, 10) : undefined,
      count: req.query.count ? parseInt(req.query.count, 10) : undefined,
      mediaType: JSON.parse(req.query.mediaType),
      userId
    });
    return res
      .status(200)
      .json(list)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupListMedia;
