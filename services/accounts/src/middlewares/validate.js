const tokens = require('../services/tokens');
const getTokenFromHeader = require('../utils/request/get-token-from-header');
const { ApiError } = require('../configurations/error');

async function validate(req, res, next) {
  try {
    // const token = getTokenFromHeader(req.headers.authorization);
    // if (!token) return next(new ApiError('INVALID_TOKEN'));
    const { token } = req.cookies;
    if (!token) return next(new ApiError('NOT_CONNECTED'));
    console.log('token=>', token);
    const id = await tokens.verify(token, 'token');
    console.log('id=>', id);
    if (!id) {
      console.log('gonna throw=>');
      return next(new ApiError('INVALID_TOKEN'));
    }
    req.authId = id;
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = validate;
