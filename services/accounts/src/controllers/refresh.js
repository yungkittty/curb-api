const { refreshTokens } = require('../services/tokens');
const { ApiError } = require('../configurations/error');

async function refresh(req, res, next) {
  const { refreshToken } = req.body;
  if (!refreshToken) return next(new ApiError('BAD_PARAMETER'));
  try {
    const response = await refreshTokens(req.cookies.token, refreshToken);
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
