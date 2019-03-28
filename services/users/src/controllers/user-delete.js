const remove = require('../services/remove');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {DELETE} /users/:id USERS PRIVATE DELETE
 * @apiName USERS2
 * @apiGroup GROUPS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} id //
 *
 *
 * @apiSuccess (200) {String} OK
 *
 * @apiError BAD_PARAMETER 400
 * @apiError USER_NOT_FOUND 400
 * @apiError UNDEFINED 500
 *
 */

async function userDelete(req, res, next) {
  if (!req.params.id) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await remove(req.params.id);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = userDelete;
