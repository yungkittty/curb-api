const { refreshTokens } = require('../services/tokens');
const getTokenFromHeader = require('../utils/request/get-token-from-header');
const { ApiError } = require('../configurations/error');

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
