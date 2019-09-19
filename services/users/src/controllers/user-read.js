const read = require('../services/read');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {GET} /users/:id USERS READ BY ID
 * @apiName USERS3
 * @apiGroup USERS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} id //
 *
 *
 * @apiSuccess (200) {Object} User user public Fields
 *
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     ...user: {Object}
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError USER_NOT_FOUND 400
 * @apiError OTHER_SERVICE_ERROR XXX
 * @apiError UNDEFINED 500
 *
 */

async function userRead(req, res, next) {
  if (!req.params.id) {
    return next(new ApiError('USERS_BAD_PARAMETER'));
  }
  try {
    const user = await read(req.params.id, req.cookies.token);
    return res
      .status(200)
      .json({
        ...user
      })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = userRead;
