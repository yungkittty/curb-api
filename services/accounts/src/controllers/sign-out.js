const authService = require('../services/account');

async function signOut(req, res, next) {
  try {
    await authService.logout(req.authId);
    if (req.cookies.token) {
      res.clearCookie('token', { httpOnly: true, secure: true, path: '/' });
    }
    return res
      .status(200)
      .json({ id: req.authId })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = signOut;
