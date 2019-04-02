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
    if (!_id) throw new ApiError('INVALID_TOKEN');
    // eslint-disable-next-line
    return decoded.payload.type === type &&
      decoded.payload.id === _id.toString()
      ? decoded.payload.id
      : null;
  } catch (error) {
    switch (error.constructor) {
      case jwt.TokenExpiredError:
        throw new ApiError('TOKEN_EXPIRED');
      case jwt.JsonWebTokenError:
        throw new ApiError('INVALID_TOKEN');
      case jwt.NotBeforeError:
        throw new ApiError('TOKEN_AHEAD_OF_TIME');
      default:
        throw new ApiError('INVALID_TOKEN');
    }
  }
}

async function refresh(token) {
  try {
    const decoded = await verify(token, 'token');
    if (!decoded) throw new ApiError('INVALID_TOKEN');
  } catch (error) {
    if (error.code === 'TOKEN_EXPIRED') {
      const decoded = jwt.decode(token);
      const account = await Account.findById(decoded.payload.id);
      if (!account) {
        throw new ApiError('INVALID_TOKEN');
      }
      const newToken = createToken(account._id.toString());
      return {
        token: newToken,
        id: account._id.toString()
      };
    }
    throw error;
  }
  throw new ApiError('TOKEN_NOT_EXPIRED');
}

module.exports = {
  createToken,
  verify,
  refresh
};
