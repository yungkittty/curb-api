const jwt = require('jsonwebtoken');
const Account = require('../../models/account');
const jwtConfig = require('../../configurations/jwt');

function generateToken(payload, expireTime) {
  return jwt.sign({ payload }, jwtConfig.secret, {
    expiresIn: expireTime
  });
}

function createToken(payload) {
  return generateToken(
    { type: 'token', id: payload },
    jwtConfig.tokenExpiration
  );
}

function createRefreshToken(payload) {
  return generateToken(
    { type: 'refreshToken', id: payload },
    jwtConfig.refreshTokenExpiration
  );
}

async function verify(token, type) {
  const decoded = jwt.verify(token, jwtConfig.secret);
  const { _id } = await Account.findById(decoded.payload.id);
  // eslint-disable-next-line
  return decoded.payload.type === type && decoded.payload.id === _id.toString()
    ? decoded.payload.id
    : null;
}

async function refreshTokens(token, refreshToken) {
  try {
    const decoded = await verify(token, 'token');
    if (!decoded) return null;
  } catch (error) {
    if (error.name !== 'TokenExpiredError') {
      throw error;
    }
    const decoded = jwt.decode(token);
    const account = await Account.findById(decoded.payload.id);
    if (!account || refreshToken !== account.refreshToken) return null;
    const newRefreshToken = createRefreshToken(account._id.toString());
    const newToken = createToken(account._id.toString());
    account.refreshToken = newRefreshToken;
    account.save();
    return {
      token: newToken,
      refreshToken: newRefreshToken,
      id: account._id
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
