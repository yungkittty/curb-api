const read = require('../../services/post/read');
const { ApiError } = require('../../configurations/error');

/**
 *
 * @api {GET} /contents/posts/:postId POST READ
 * @apiName POST3
 * @apiGroup POST
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} postId //
 *
 * @apiSuccess (200) {Object} OK
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     [WIP]
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError UNDEFINED 500
 *
 */

async function postRead(req, res, next) {
  try {
    if (!req.permissions.read) {
      return next(new ApiError('POSTS_FORBIDEN_OPERATION'));
    }
    const post = await read(req.params.postId);

    return res
      .status(200)
      .json(post)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = postRead;
