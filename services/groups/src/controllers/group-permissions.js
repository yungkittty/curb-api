const permissions = require('../services/permissions');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /groups/permissions/:groupId/:userId GROUPS PERMISSION
 * @apiName GROUPS9
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} userId QueryParam
 * @apiParam  {String} groupId QueryParam
 *
 *
 * @apiSuccess (200) {Boolean} creator is the creator of the group
 * @apiSuccess (200) {Boolean} write can read in the group
 * @apiSuccess (200) {Boolean} read can write in the group
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     creator: Boolean,
 *     write: Boolean,
 *     read: Boolean
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError GROUP_NOT_FOUND 400
 *
 */

async function groupPermissions(req, res, next) {
  if (!req.params.groupId || !req.params.userId) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    const rights = await permissions(req.params.groupId, req.params.userId);
    return res
      .status(200)
      .json(rights)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupPermissions;
