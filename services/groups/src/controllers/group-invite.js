const invite = require('../services/invite');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /groups/invite/:groupId GROUPS INVITATION
 * @apiName GROUPS5
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId //
 *
 *
 * @apiSuccess (200) {String} token
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     token: '{String}'
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError GROUP_NOT_FOUND 400
 * @apiError USER_NOT_IN_GROUP 403
 * @apiError OTHER_SERVICE XXX
 *
 */

async function groupInvite(req, res, next) {
  if (!req.params.groupId) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    const response = await invite(req.params.groupId, req.authId);
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupInvite;
