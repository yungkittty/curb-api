const avatar = require('../services/avatar');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /avatar/:groupId ACCOUNT PRIVATE UPDATE AVATAR URL
 * @apiName GROUPS13
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} groupId //
 * @apiParam  {String} avatarUrl //
 *
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     avatarUrl: '/contents/default/avatars/groups/medium.png'
 * }
 *
 *
 * @apiError BAD_PARAMETER 400
 *
 */

async function groupAvatars(req, res, next) {
  if (!req.body.avatarUrl || !req.params.groupId) {
    return next(new ApiError('GROUPS_BAD_PARAMETER'));
  }
  try {
    await avatar(req.params.groupId, req.body.avatarUrl);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupAvatars;
