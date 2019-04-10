const authService = require('../services/account');

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
    await authService.logout(req.authId);
    if (req.cookies.token) {
      res.clearCookie('token', { httpOnly: true, secure: true, path: '/' });
    }
    return res
      .status(200)
      .json({ id: req.authId })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = signOut;
