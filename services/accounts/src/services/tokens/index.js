const jwt = require('jsonwebtoken');
const Account = require('../../models/account');
const jwtConfig = require('../../configurations/jwt');
const { ApiError } = require('../../configurations/error');

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

async function verify(token, type) {
  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    const { _id } = await Account.findById(decoded.payload.id);
    if (!_id) throw new ApiError('ACCOUNTS_INVALID_TOKEN');
    // eslint-disable-next-line
    return decoded.payload.type === type &&
      decoded.payload.id === _id.toString()
      ? decoded.payload.id
      : null;
  } catch (error) {
    switch (error.constructor) {
      case jwt.TokenExpiredError:
        throw new ApiError('ACCOUNTS_TOKEN_EXPIRED');
      case jwt.JsonWebTokenError:
        throw new ApiError('ACCOUNTS_INVALID_TOKEN');
      case jwt.NotBeforeError:
        throw new ApiError('ACCOUNTS_TOKEN_AHEAD_OF_TIME');
      default:
        throw new ApiError('ACCOUNTS_INVALID_TOKEN');
    }
  }
}

async function refresh(token) {
  try {
    const decoded = await verify(token, 'token');
    if (!decoded) throw new ApiError('ACCOUNTS_INVALID_TOKEN');
    return decoded;
  } catch (error) {
    if (error.code === 'ACCOUNTS_TOKEN_EXPIRED') {
      const decoded = jwt.decode(token);
      const account = await Account.findById(decoded.payload.id);
      if (!account) {
        throw new ApiError('ACCOUNTS_INVALID_TOKEN');
      }
      const newToken = createToken(account._id.toString());
      return {
        token: newToken,
        id: account._id.toString()
      };
    }
    throw error;
  }
}

module.exports = {
  createToken,
  verify,
  refresh
};
