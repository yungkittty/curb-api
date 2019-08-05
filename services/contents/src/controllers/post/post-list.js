const list = require('../../services/post/list');
const { ApiError, OtherServiceError } = require('../../configurations/error');
const groupGet = require('../../utils/group-get');

/**
 *
 * @api {GET} /posts/list/:groupId POSTS LIST
 * @apiName POSTS7
 * @apiGroup POSTS
 * @apiVersion  0.1.0
 * @apiDescription
 * <h4>List for posts </h4><br>
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

    ]
}
 * @apiError BAD_PARAMETER 400
 * @apiError OTHER_SERVICE_ERROR XXX
 *
 */

async function postList(req, res, next) {
  try {
    if (!req.params.groupId) {
      throw new ApiError('POSTS_BAD_PARAMETER');
    }
    if (!req.authId) {
      const response = groupGet(req.params.groupId);
      if (response.status !== 200) {
        throw new OtherServiceError(response.data.service, response.data.code, response.status);
      }
      if (response.data.status === 'private') {
        throw new ApiError('POSTS_FORBIDEN_OPERATION');
      }
    }
    const listPost = await list({
      groupId: req.params.groupId,
      page: req.query.page ? parseInt(req.query.page, 10) : undefined,
      count: req.query.count ? parseInt(req.query.count, 10) : undefined,
      mediaType: req.query.mediaType ? JSON.parse(req.query.mediaType) : undefined
    });
    return res
      .status(200)
      .json(listPost)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = postList;
