const remove = require('../../services/post/remove');
const { ApiError } = require('../../configurations/error');

/**
 *
 * @api {DELETE} /contents/posts/:postId POST DELETE
 * @apiName POST2
 * @apiGroup POST
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

async function postCreate(req, res, next) {
  try {
    if (!req.params.postId) return next(new ApiError('CONTENTS_BAD_PARAMETER'));
    const postId = await remove(req.params.postId);
    return res
      .status(200)
      .json(postId)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = postCreate;
