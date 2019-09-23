const reaction = require('../../services/post/reaction');
const { ApiError } = require('../../configurations/error');

/**
 *
 * @api {POST} /contents/posts/reaction/:postId POST REACTION
 * @apiName POSTS6
 * @apiGroup POSTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} postId //
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     reaction: {
 *        ids: [Uuid]
 *     }
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError UNDEFINED 500
 *
 */

async function postReaction(req, res, next) {
  try {
    if (!req.params.postId) return next(new ApiError('POSTS_BAD_PARAMETER'));
    if (!req.permissions.write) {
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
