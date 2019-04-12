const jwt = require('jsonwebtoken');
const { ApiError } = require('../../configurations/error');

function tokenGetPayload(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    switch (error.constructor) {
      case jwt.TokenExpiredError:
        throw new ApiError('GROUPS_TOKEN_EXPIRED');
      case jwt.NotBeforeError:
        throw new ApiError('GROUPS_TOKEN_AHEAD_OF_TIME');
      default:
        throw new ApiError('GROUPS_INVALID_TOKEN');
    }
  }
}

module.exports = tokenGetPayload;
