const pin = require('../../services/post/pin');
const { ApiError } = require('../../configurations/error');

/**
 *
 * @api {POST} /contents/posts/pin/:postId POST PIN
 * @apiName POST5
 * @apiGroup POSTS
 * @apiVersion  0.2.0
 *
 *
 * @apiParam  {String} postId //
 *
 * @apiSuccess (200) {Object} OK
 *
 *
 * @apiError BAD_PARAMETER 400
 * @apiError UNDEFINED 500
 *
 */

async function postPin(req, res, next) {
  try {
    if (!req.params.postId) return next(new ApiError('POSTS_BAD_PARAMETER'));
    if (!req.permissions.creator) {
      return next(new ApiError('POSTS_FORBIDEN_OPERATION'));
    }
    const postId = await pin(req.params.postId);
    return res
      .status(200)
      .json(postId)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = postPin;
