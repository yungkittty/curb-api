const authService = require('../services/authentication');

async function signIn(req, res) {
  const { login, password } = req.body;
  if (!login || !password) {
    return res.status(400).json({});
  }
  try {
    const signed = await authService.authenticate({ login, password });
    if (!signed) {
      return res.status(400).json({});
    }
    return res.status(200).json({
      token: signed.token,
      user: signed.user
    });
  } catch (error) {
    return res.status(400).json({});
  }
}

module.exports = signIn;
