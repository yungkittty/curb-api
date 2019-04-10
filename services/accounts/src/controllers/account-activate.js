const activate = require('../services/account/activate');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /accounts/activate/:id ACCOUNT ACTIVATE
 * @apiName ACCOUNTS9
 * @apiGroup ACCOUNTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} token token from the mail
 *
 *
 * @apiSuccess (200) {String} userId the userId
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     token: '{String}'
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError ACCOUNT_NOT_FOUND 400
 * @apiError ACCOUNT_ALREADY_ACTIVE 400
 * @apiError ACCOUNT_CODE_DIFFERENT 400
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED 500
 *
 */

async function accountActivate(req, res, next) {
  if (!req.body.token) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    const response = await activate(req.body.token);
    // TODO log in user
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountActivate;
