const deletePost = require('../services/delete-post');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {DELETE} /medias/:groupId/:mediaId GROUPS PRIVATE DELETE MEDIA
 * @apiName GROUPS12
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId //
 * @apiParam  {String} mediaId //
 *
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     userId: '1'
 * }
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
  if (!req.params.groupId || !req.params.mediaId) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    await deletePost(req.params.groupId, req.params.mediaId, req.body.userId);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupAddPost;
