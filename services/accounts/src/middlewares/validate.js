const tokens = require('../services/tokens');
const getTokenFromHeader = require('../utils/request/get-token-from-header');
const { ApiError } = require('../configurations/error');

async function validate(req, res, next) {
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return next(new ApiError('INVALID_TOKEN'));
    const id = await tokens.verify(token, 'token');
    if (!id) {
      return next(new ApiError('INVALID_TOKEN'));
    }
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = validate;
