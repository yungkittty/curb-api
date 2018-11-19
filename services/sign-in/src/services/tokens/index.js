const jwt = require('jsonwebtoken');
const User = require('../../../../../models/user');
const jwtConfig = require('../../configurations/jwt');

function generateToken(payload, expireTime) {
  return jwt.sign({ payload }, jwtConfig.secret, {
    expiresIn: expireTime
  });
}

function createToken(payload) {
  return generateToken(
    { type: 'token', userId: payload },
    jwtConfig.tokenExpiration
  );
}

function createRefreshToken(payload) {
  return generateToken(
    { type: 'refreshToken', userId: payload },
    jwtConfig.refreshTokenExpiration
  );
}

async function verify(token, type, userId = null) {
  const decoded = jwt.verify(token, jwtConfig.secret);
  if (!userId) {
    const { _id } = await User.findById(decoded.payload.userId);
    return (
      decoded.payload.type === type && decoded.payload.userId === _id.toString()
    );
  }
  return decoded.payload.type === type && decoded.payload.userId === userId;
}

async function refreshTokens(token, refreshToken, userId) {
  try {
    const decoded = await verify(token, 'token', userId);
    if (!decoded) return null;
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
