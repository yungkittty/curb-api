const create = require('../services/create');
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

async function groupCreate(req, res, next) {
  if (!req.body) return next(new ApiError('BAD_PARAMETER'));
  const { name, status, mediaTypes, theme } = req.body;
  if (!name || !status || !mediaTypes || !theme) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    const groupId = await create({
      creatorId: req.authId,
      name,
      status,
      mediaTypes,
      theme
    });
    return res
      .status(200)
      .json(groupId)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupCreate;
