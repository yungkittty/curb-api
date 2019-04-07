const updateCodeVerification = require('../services/account/update-code-verification');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /accounts/code-verification/:id PRIVATE ACCOUNT UPDATE CODE ACTIVATION
 * @apiName ACCOUNTS12
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
 * @apiError ACCOUNT_ALREADY_ACTIVE 500
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED 500
 */

async function accountCode(req, res, next) {
  if (!req.params.id || !req.body.code) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    const response = await updateCodeVerification(req.params.id, req.body.code);
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountCode;
