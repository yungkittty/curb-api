const report = require('../../services/post/report');
const { ApiError } = require('../../configurations/error');

/**
 *
 * @api {POST} /contents/posts/report/:postId POST REPORT
 * @apiName POSTS8
 * @apiGroup POSTS
 * @apiVersion  0.2.0
 *
 *
 * @apiParam  {String} postId //
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     report: [Uuid],
 *     deleted: [Boolean]
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError UNDEFINED 500
 *
 */

async function postReport(req, res, next) {
  try {
    if (!req.params.postId) return next(new ApiError('POSTS_BAD_PARAMETER'));
    if (!req.permissions.write) {
      return next(new ApiError('POSTS_FORBIDEN_OPERATION'));
    }
    const response = await report(req.params.postId, req.authId, req.token);
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = postReport;
