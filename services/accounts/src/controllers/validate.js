const tokens = require('../services/tokens');
const getTokenFromHeader = require('../utils/request/get-token-from-header');
const { ApiError } = require('../configurations/error');
const isAccountValid = require('../services/account/is-account-valid');

/**
 *
 * @api {POST} /accounts/sign-up ACCOUNT VALIDATE (AUTH)
 * @apiName ACCOUNTS7
 * @apiGroup ACCOUNTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} email //
 * @apiParam  {String} password //
 * @apiParam  {String} name //
 *
 *
 * @apiSuccess (200) {String} id id of the created account
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     email: 'email.email@email.com',
 *     password: 'password',
 *     name: 'userName',
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuuid'
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError BAD_EMAIL_FORMAT
 * @apiError TOKEN_AHEAD_OF_TIME 400
 * @apiError INVALID_TOKEN 403
 * @apiError TOKEN_EXPIRED 403
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED 500
 */

async function validate(req, res, next) {
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return next(new ApiError('INVALID_TOKEN'));
    const id = await tokens.verify(token, 'token');
    if (!id) {
      return next(new ApiError('INVALID_TOKEN'));
    }
    if (req.body && req.body.active) {
      const isValid = await isAccountValid(id);
      if (!isValid) return next(new ApiError('ACCOUNT_NOT_ACTIVATE'));
    }
    return res
      .status(200)
      .json({ id })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = validate;
