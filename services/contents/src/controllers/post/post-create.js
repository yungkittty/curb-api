const create = require('../../services/post/create');
const { ApiError } = require('../../configurations/error');

/**
 *
 * @api {POST} /contents/posts/ POST CREATE
 * @apiName POST1
 * @apiGroup POST
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} postId //

 * @apiSuccess (200) {Object} POST ID
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: "1"
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError UNDEFINED 500
 *
 */

async function postCreate(req, res, next) {
  try {
    if (!req.params.groupId) return next(new ApiError('POSTS_BAD_PARAMETER'));
    if (!req.permissions.creator || !req.permissions.write) {
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
