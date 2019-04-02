const validateCodePassword = require('../services/account/validate-code-password');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /accounts/validate-code-password ACCOUNT VALIDATE CODE PASSWORD
 * @apiName ACCOUNTS14
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
 *     password: 'password'
 * }
 *
 *
 * @apiError BAD_PARAMETER 400
 * @apiError ACCOUNT_NOT_FOUND 400
 * @apiError CODE_UNAVAILABLE 400
 * @apiError ACCOUNT_CODE_DIFFERENT 400
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED 500
 */

async function accountValidateCodePassword(req, res, next) {
  if (!req.body.email || !req.body.code) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await validateCodePassword(req.body.code, req.body.email);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountValidateCodePassword;
