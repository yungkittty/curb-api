const tokens = require('../services/tokens');
const { ApiError } = require('../configurations/error');
const isAccountValid = require('../services/account/is-account-valid');
const { refresh } = require('../services/tokens');

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
  if (req.authId || req.token) {
    return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  }
  try {
    const { token } = req.cookies;
    if (token === 'undefined' || token === null || token === 'null') {
      return next(new ApiError('ACCOUNTS_TOKEN_DISCONNECTED'));
    }
    const id = await tokens.verify(token, 'token');
    if (!id) {
      return next(new ApiError('ACCOUNTS_INVALID_TOKEN'));
    }
    if (req.body && req.body.active) {
      const isValid = await isAccountValid(id);
      if (!isValid) return next(new ApiError('ACCOUNTS_NOT_ACTIVATE'));
    }
    return res
      .status(200)
      .json({ id })
      .end();
  } catch (error) {
    if (error.code === 'ACCOUNTS_TOKEN_EXPIRED') {
      try {
        const payload = await refresh(req.cookies.token);
        return res
          .status(200)
          .cookie('token', payload.token, { httpOnly: true, secure: true })
          .json({ id: payload.id })
          .end();
      } catch (refreshError) {
        return next(refreshError);
      }
    }
    return next(error);
  }
}

module.exports = validate;
