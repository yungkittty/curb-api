const reaction = require('../../services/post/reaction');
const { ApiError } = require('../../configurations/error');

/**
 *
 * @api {POST} /contents/posts/reaction/:postId POST PIN
 * @apiName POST6
 * @apiGroup POST
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} postId //
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     reaction: 200
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError UNDEFINED 500
 *
 */

async function postReaction(req, res, next) {
  try {
    if (!req.params.postId) return next(new ApiError('POSTS_BAD_PARAMETER'));
    if (!req.permissions.creator || !req.permissions.write) {
      return next(new ApiError('POSTS_FORBIDEN_OPERATION'));
    }
    const reactionNumber = await reaction(req.params.postId, req.authId);
    return res
      .status(200)
      .json(reactionNumber)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = postReaction;
