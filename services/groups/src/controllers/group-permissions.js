const permissions = require('../services/permissions');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /groups/sign-out ACCOUNT CREATE
 * @apiName TOTO
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} email //
 * @apiParam  {String} password //
 * @apiParam  {String} name //
 *
 *
 * @apiSuccess (200) {String} id id of the created account
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     email: 'email.email@email.com',
 *     password: 'password',
 *     name: 'userName',
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuuid'
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError BAD_EMAIL_FORMAT
 * @apiError OTHER_SERVICE_ERROR
 *
 */

async function groupPermissions(req, res, next) {
  if (!req.params.groupId || !req.params.userId) {
    return next(new ApiError('BAD_PARAMETER'));
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
