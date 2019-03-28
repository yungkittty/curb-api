const readByEmail = require('../services/account/read-by-email');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {GET} /accounts/email ACCOUNT READ BY EMAIL
 * @apiName ACCOUNTS4
 * @apiGroup ACCOUNTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} email //
 *
 *
 * @apiSuccess (200) {Object} User public fields of the accounts
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     email: 'email.email@email.com',
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     ...user: {Object},
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError BAD_EMAIL_FORMAT 400
 * @apiError OTHER_SERVICE_ERROR XXX
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED 500
 */

async function accountReadByEmail(req, res, next) {
  if (!req.body.email) return next(new ApiError('BAD_PARAMETER'));
  try {
    const account = await readByEmail(req.body.email);
    return res
      .status(200)
      .json(account)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountReadByEmail;
