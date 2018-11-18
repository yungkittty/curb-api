const { refreshTokens } = require('../services/tokens');

async function refresh(req, res) {
  const { token, refreshToken, id } = req.body;
  if (!token || !refreshToken || !id) return res.status(400).end();
  try {
    const response = await refreshTokens(token, refreshToken, id);
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
