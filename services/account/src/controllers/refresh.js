const { refreshTokens } = require('../services/tokens');
const getTokenFromHeader = require('../utils/request/get-token-from-header');

async function refresh(req, res) {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(400).end();
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return res.sendStatus(403).end();
    const response = await refreshTokens(token, refreshToken);
    if (!response) return res.status(400).end();
    return res.status(200).json({
      token: response.token,
      refreshToken: response.refreshToken,
      id: response.id
    });
  } catch (error) {
    return res.status(400).end();
  }
}

module.exports = refresh;
