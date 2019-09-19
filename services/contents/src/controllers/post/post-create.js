const create = require('../../services/post/create');
const { ApiError } = require('../../configurations/error');

/**
 *
 * @api {POST} /contents/posts/:groupId POST CREATE
 * @apiName POSTS1
 * @apiGroup POSTS
 * @apiVersion  0.1.0
* @apiDescription
 * <h4>To create a posts :
 *  <li>
 *    call /contents/posts/:groupId
 *  </li>
 *  <li>
 *    Then call /contents/${mediaType}/:postId, to upload medias for the corresponding post
 *  </li>
 * </h4><br>
 * @apiParam  {String} groupId //

 * @apiSuccess (200) {Object} POST ID
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: "1" (postId)
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError UNDEFINED 500
 *
 */

async function postCreate(req, res, next) {
  try {
    if (!req.params.groupId) return next(new ApiError('POSTS_BAD_PARAMETER'));
    if (!req.permissions.write) {
      return next(new ApiError('POSTS_FORBIDEN_OPERATION'));
    }
    const postId = await create(req.cookies.token, req.params.groupId, req.authId);
    return res
      .status(200)
      .json(postId)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = postCreate;
