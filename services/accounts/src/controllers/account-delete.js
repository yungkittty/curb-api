const remove = require('../services/account/remove');
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
  if (!req.params.id) return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  if (req.params.id !== req.authId) {
    return next(new ApiError('ACCOUNTS_FORBIDEN_OPERATION'));
  }
  try {
    if (req.cookies.token) {
      res.clearCookie('token', { httpOnly: true, secure: true, path: '/' });
    }
    await remove(req.params.id, req.cookies.token);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountDelete;
