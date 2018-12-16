const authService = require('../services/authentication');

async function signIn(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).end();
  }
  try {
    const signed = await authService.authenticate({ email, password });
    if (!signed) {
      return res.status(400).end();
    }
    return res.status(200).json({
      token: signed.token,
      refreshToken: signed.refreshToken,
      id: signed.id
    });
  } catch (error) {
    return res.status(400).end();
  }
}

module.exports = signIn;
