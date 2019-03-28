const avatar = require('../services/avatar');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /users/avatar/:id USER PRIVATE UPDATE AVATAR URL PATH
 * @apiName USERS5
 * @apiGroup USERS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} id //
 * @apiParam  {String} avatarUrl path file from /contents
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     avatarUrl: '/contents/default/avatars/users/medium.png',
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError USER_NOT_FOUND 400
 * @apiError UNDEFINED 500
 *
 */

async function userAvatar(req, res, next) {
  if (!req.body.avatarUrl || !req.params.userId) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await avatar(req.params.userId, req.body.avatarUrl);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = userAvatar;
