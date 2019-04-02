const authService = require('../services/account');
const getTokenFromHeader = require('../utils/request/get-token-from-header');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /accounts/sign-out ACCOUNT SIGN-OUT
 * @apiName ACCOUNTS6
 * @apiGroup ACCOUNTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} email //
 * @apiParam  {String} password //
 * @apiParam  {String} name //
 *
 *
 * @apiSuccess (200) {String} OK
 *
 *
 * @apiError BAD_PARAMETER 400
 * @apiError ACCOUNT_NOT_FOUND 400
 * @apiError TOKEN_EXPIRED 403
 * @apiError TOKEN_AHEAD_OF_TIME 400
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED: 500
 */

async function signOut(req, res, next) {
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return next(new ApiError('INVALID_TOKEN'));
    await authService.logout(token);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = signOut;
