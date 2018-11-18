const authService = require('../services/authentication');

async function signOut(req, res) {
  const { login, password, refreshToken } = req.body;
  if (!login || !password || !refreshToken) return res.status(400).json({});
  try {
    const response = await authService.logout({
      login,
      password,
      refreshToken
    });
    if (!response) return res.status(400).json({});
    return res.status(200).json({});
  } catch (error) {
    return res.status(400).json({});
  }
}

module.exports = signOut;
