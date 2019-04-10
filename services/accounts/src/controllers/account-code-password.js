const updateCodePassword = require('../services/account/update-code-password');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /accounts/code-password/:id PRIVATE ACCOUNT UPDATE CODE PASSWORD
 * @apiName ACCOUNTS11
 * @apiGroup ACCOUNTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} code //
 *
 *
 * @apiSuccess (200) OK
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     code: '586753',
 * }
 *
 *
 * @apiError BAD_PARAMETER 400
 * @apiError ACCOUNT_NOT_FOUND 400
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED 500
 */

async function accountCode(req, res, next) {
  if (!req.params.id || !req.body.code) {
    return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  }
  try {
    await updateCodePassword(req.params.id, req.body.code);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountCode;
