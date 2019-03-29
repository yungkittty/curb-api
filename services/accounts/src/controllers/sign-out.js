const authService = require('../services/account');

async function signOut(req, res, next) {
  try {
    await authService.logout(req.cookies.token);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = signOut;
