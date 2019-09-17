const remove = require('../../services/post/remove');
const { ApiError } = require('../../configurations/error');

/**
 *
 * @api {DELETE} /contents/posts/:postId POST DELETE
 * @apiName POSTS2
 * @apiGroup POSTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} postId //
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiError BAD_PARAMETER 400
 * @apiError UNDEFINED 500
 *
 */

async function postDelete(req, res, next) {
  try {
    if (!req.params.postId) return next(new ApiError('POSTS_BAD_PARAMETER'));
    if (!req.permissions.creator || !req.permissions.write) {
      return next(new ApiError('POSTS_FORBIDEN_OPERATION'));
    }
    await remove(req.cookies.token, req.params.postId);
    return res
      .status(200)
      .json()
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = postDelete;
