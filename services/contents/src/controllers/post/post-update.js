const update = require('../../services/post/update');

/**
 *
 * @api {PATCH} /contents/posts/ POST UPDATE
 * @apiName POST4
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

async function postUpdate(req, res, next) {
  try {
    const postId = await update(req.authId);
    return res
      .status(200)
      .json(postId)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = postUpdate;
