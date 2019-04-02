const remove = require('../services/account/remove');
const getTokenFromHeader = require('../utils/request/get-token-from-header');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {DELETE} /accounts/:id ACCOUNT DELETE
 * @apiName ACCOUNTS13
 * @apiGroup ACCOUNTS
 * @apiVersion  0.1.0
 *
 * @apiSuccess (200) {String} OK
 *
 *
 * @apiError BAD_PARAMETER 400
 * @apiError OTHER_SERVICE_ERROR XXX
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED 500
 */

async function accountDelete(req, res, next) {
  if (!req.params.id) return next(new ApiError('BAD_PARAMETER'));
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return next(new ApiError('INVALID_TOKEN'));
    await remove(req.params.id, token);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountDelete;
