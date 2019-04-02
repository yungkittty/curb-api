const { refreshTokens } = require('../services/tokens');
const getTokenFromHeader = require('../utils/request/get-token-from-header');
const { ApiError } = require('../configurations/error');

/**
 *
 * @api {POST} /accounts/sign-out ACCOUNT REFRESH TOKEN
 * @apiName ACCOUNTS8
 * @apiGroup ACCOUNTS
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} email //
 * @apiParam  {String} password //
 * @apiParam  {String} name //
 *
 *
 * @apiSuccess (200) {String} token token
 * @apiSuccess (200) {String} refreshToken refreshToken
 * @apiSuccess (200) {String} id id
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     refreshToken: 'uuid',
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     token: 'uuid',
 *     refreshToken: 'uuid',
 *     id: 'uuid'
 * }
 *
 * @apiError BAD_PARAMETER 400
 * @apiError DATABASE_ERROR 500
 * @apiError UNDEFINED 500
 */

async function refresh(req, res, next) {
  const { refreshToken } = req.body;
  if (!refreshToken) return next(new ApiError('BAD_PARAMETER'));
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return next(new ApiError('INVALID_TOKEN'));
    const response = await refreshTokens(token, refreshToken);
    return res.status(200).json({
      token: response.token,
      refreshToken: response.refreshToken,
      id: response.id
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = refresh;
