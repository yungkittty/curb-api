const deletePost = require('../services/delete-post');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {DELETE} /posts/:groupId/:postId GROUPS PRIVATE DELETE MEDIA
 * @apiName GROUPS12
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId //
 * @apiParam  {String} postId //
 *
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuuid'
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError GROUP_NOT_FOUND 400
 * @apiError MEDIA_NOT_FOUND 400
 * @apiError UNDEFINED 500
 *
 */

async function groupAddPost(req, res, next) {
  if (!req.params.groupId || !req.params.postId) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    await deletePost(req.params.groupId, req.params.postId, req.authId);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupAddPost;
