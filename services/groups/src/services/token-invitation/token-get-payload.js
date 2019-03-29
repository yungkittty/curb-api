const jwt = require('jsonwebtoken');
const { ApiError } = require('../../configurations/error');

function tokenGetPayload(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    switch (error.constructor) {
      case jwt.TokenExpiredError:
        throw new ApiError('TOKEN_EXPIRED');
      case jwt.NotBeforeError:
        throw new ApiError('TOKEN_AHEAD_OF_TIME');
      default:
        throw new ApiError('INVALID_TOKEN');
    }
  }
}

module.exports = tokenGetPayload;
