const jwt = require('jsonwebtoken');
const User = require('../../user');
const jwtConfig = require('../../configurations/jwt');

function generateToken(payload, expireTime) {
  return jwt.sign({ payload }, jwtConfig.secret, {
    expiresIn: expireTime
  });
}

function createToken(payload) {
  return generateToken(payload, jwtConfig.tokenExpiration);
}

function createRefreshToken(payload) {
  return generateToken(payload, jwtConfig.refreshTokenExpiration);
}

function verify(token) {
  return jwt.verify(token, jwtConfig.secret);
}

async function refreshTokens(token, refreshToken, userId) {
  try {
    verify(token);
  } catch (error) {
    if (error.name !== 'TokenExpiredError') {
      throw error;
    }
    const user = await User.findById(userId);
    if (!user || refreshToken !== user.refreshToken) return null;
    const newRefreshToken = createRefreshToken(user._id);
    const newToken = createToken(user._id);
    user.refreshToken = newRefreshToken;
    user.save();
    return {
      token: newToken,
      refreshToken: newRefreshToken,
      id: user._id
    };
  }
  return null;
}

module.exports = {
  createToken,
  createRefreshToken,
  verify,
  refreshTokens
};
