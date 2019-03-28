const create = require('../services/create');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /users/ USER PRIVATE CREATE
 * @apiName USERS1
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} id //
 * @apiParam  {String} name //
 *
 *
 * @apiSuccess (200) {String} id id of the created user
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     id: 'uuid',
 *     name: 'toto'
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuuid'
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError UNDEFINED 500
 */

async function userCreate(req, res, next) {
  try {
    if (!req.body.id || !req.body.name) {
      return next(new ApiError('BAD_PARAMETER'));
    }
    const doService = await create(req.body);
    return res
      .status(200)
      .json({
        id: doService.id
      })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = userCreate;
