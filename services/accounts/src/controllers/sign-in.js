const authService = require('../services/account');
const verifyEmail = require('../utils/email/verify-email');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /accounts/sign-out ACCOUNT SIGN-IN
 * @apiName ACCOUNTS2
 * @apiGroup ACCOUNTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} email //
 * @apiParam  {String} password //
 * @apiParam  {String} name //
 *
 *
 * @apiSuccess (200) {String} token token
 * @apiSuccess (200) {String} refreshToken refreshToken
 * @apiSuccess (200) {String} id id
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     email: 'email.email@email.com',
 *     password: 'password',
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     token: 'uuid',
 *     refreshToken: 'uuid',
 *     id: 'uuid'
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError BAD_EMAIL_FORMAT 400
 * @apiError INVALID_PASSWORD 400
 * @apiError ACCOUNT_NOT_FOUND 400
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED 500
 */

async function signIn(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  if (!verifyEmail(email)) return next(new ApiError('BAD_EMAIL_FORMAT'));
  try {
    const signed = await authService.authenticate({ email, password });
    return res
      .status(200)
      .json({
        token: signed.token,
        refreshToken: signed.refreshToken,
        id: signed.id
      })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = signIn;
