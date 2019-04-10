const read = require('../services/account/read');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {GET} /accounts/:id ACCOUNT READ BY ID
 * @apiName ACCOUNTS3
 * @apiGroup ACCOUNTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} Id //
 *
 *
 * @apiSuccess (200) {Object} Account public field of the account
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     id: 'uuid',
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     ...user: {Object},
 *     groups: [String]
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError OTHER_SERVICE_ERROR
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED 500
 */

async function accountRead(req, res, next) {
  if (!req.params.id) return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  try {
    const account = await read(req.params.id);
    return res
      .status(200)
      .json(account)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountRead;
