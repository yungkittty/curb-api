const authService = require('../services/account');
const getTokenFromHeader = require('../utils/request/get-token-from-header');
const { ApiError } = require('../configurations/error');

async function signOut(req, res, next) {
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return next(new ApiError('INVALID_TOKEN'));
    await authService.logout(token);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = signOut;
