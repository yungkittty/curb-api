const addPost = require('../services/add-post');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /medias/:groupId/:mediaId GROUPS PRIVATE ADD MEDIA
 * @apiName GROUPS11
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId //
 * @apiParam  {String} mediaId //
 * @apiParam  {String} type mediaType
 *
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     type: 'localsation',
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError GROUP_NOT_FOUND 400
 * @apiError BAD_MEDIATYPES 400
 * @apiError MEDIA_ALREADY_PRESENT 403
 * @apiError UNDEFINED 500
 */

async function groupPost(req, res, next) {
  if (!req.params.groupId || !req.params.mediaId || !req.body.type) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    await addPost(req.params.groupId, req.params.mediaId, req.body.type);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupPost;
