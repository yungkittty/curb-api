const update = require('../services/account/update');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {PATCH} /accounts/:id ACCOUNT UPDATE
 * @apiName ACCOUNTS5
 * @apiGroup ACCOUNTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} email //
 * @apiParam  {String} password //
 * @apiParam  {String} name //
 *
 *
 * @apiSuccess (200) {Object} User public fields of the accounts
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     email: 'email.email@email.com'
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     ...user: {Object},
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError ACCOUNT_NOT_FOUND 400
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED 500
 */

async function accountUpdate(req, res, next) {
  if (!req.body) return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  if (!req.params.id) return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  if (!req.body.email && !req.body.password) {
    return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  }
  if (req.authId !== req.params.id) {
    return next(new ApiError('ACCOUNTS_FORBIDEN_OPERATION'));
  }
  try {
    const account = await update(
      req.params.id,
      req.body.email,
      req.body.password
    );
    return res
      .status(200)
      .json({ ...account })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountUpdate;
