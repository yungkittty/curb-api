const authService = require('../services/account');

async function signOut(req, res, next) {
  try {
    await authService.logout(req.cookies.token);
    if (req.cookies.token) {
      res.clearCookie('token', { httpOnly: true });
    }
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = signOut;
