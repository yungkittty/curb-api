const update = require('../services/update');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {PATCH} /users/:id USERS UPDATE
 * @apiName USERS4
 * @apiGroup USERS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} email //
 * @apiParam  {String} password //
 * @apiParam  {String} name //
 *
 *
 * @apiSuccess (200) {Object} User user public field
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     <any>: publicfield
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     ...user: {Object}
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError USER_NOT_FOUND 400
 * @apiError UNDEFINED 500
 *
 */

async function userUpdate(req, res, next) {
  try {
    if (
      req.body.id ||
      req.body.__v ||
      req.body._id ||
      req.body.avatarUrl ||
      req.body.dateCreation
    ) {
      return next(new ApiError('USERS_BAD_PARAMETER'));
    }
    const doService = await update(req.params.id, req.body);
    return res
      .status(200)
      .json({
        ...doService
      })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = userUpdate;
