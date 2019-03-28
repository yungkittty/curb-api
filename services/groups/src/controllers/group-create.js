const create = require('../services/create');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /groups/ GROUPS CREATE
 * @apiName GROUPS1
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} email //
 * @apiParam  {String} password //
 * @apiParam  {String} name //
 *
 *
 * @apiSuccess (200) {Object} Group Public field of the group
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     name: 'toto',
 *     status: 'private',
 *     mediaTypes: '['localisation', 'text'],
 *     theme: 'red'
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     ...group: {Object}
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError UNDEFINED 500
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
