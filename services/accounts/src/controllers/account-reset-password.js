const resetPassword = require('../services/account/reset-password');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /accounts/reset-password/ ACCOUNT RESET PASSWORD
 * @apiName ACCOUNTS10
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
 * @apiParamExample  {json} Request-Example:
 * {
 *     email: 'email.email@email.com',
 *     password: 'password',
 *     code: '890321',
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError ACCOUNT_NOT_FOUND 400
 * @apiError ACCOUNT_CODE_DIFFERENT 400
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED 500
 */

async function accountActivate(req, res, next) {
  if (!req.body.email || !req.body.password || !req.body.code) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await resetPassword(req.body.email, req.body.code, req.body.password);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountActivate;
