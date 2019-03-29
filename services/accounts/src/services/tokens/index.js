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

function createRefreshToken(payload) {
  return generateToken(
    { type: 'refreshToken', id: payload },
    jwtConfig.refreshTokenExpiration
  );
}

async function verify(token, type) {
  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    console.log(decoded);
    const { _id } = await Account.findById(decoded.payload.id);
    console.log('found accounts=>', _id);
    if (!_id) throw new ApiError('INVALID_TOKEN');
    // eslint-disable-next-line
    return decoded.payload.type === type &&
      decoded.payload.id === _id.toString()
      ? decoded.payload.id
      : null;
  } catch (error) {
    console.log('error=>', error);
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

async function refreshTokens(token, refreshToken) {
  try {
    const decoded = await verify(token, 'token');
    if (!decoded) throw new ApiError('INVALIDE_TOKEN');
  } catch (error) {
    if (error.name !== 'TokenExpiredError') {
      switch (error.constructor) {
        case jwt.JsonWebTokenError:
          throw new ApiError('INVALID_TOKEN');
        case jwt.NotBeforeError:
          throw new ApiError('TOKEN_AHEAD_OF_TIME');
        default:
          throw error;
      }
    }
    const decoded = jwt.decode(token);
    const account = await Account.findById(decoded.payload.id);
    if (!account || refreshToken !== account.refreshToken) {
      throw new ApiError('BAD_REFRESH_TOKEN');
    }
    const newRefreshToken = createRefreshToken(account._id.toString());
    const newToken = createToken(account._id.toString());
    account.refreshToken = newRefreshToken;
    await account.save();
    return {
      token: newToken,
      refreshToken: newRefreshToken,
      id: account._id
    };
  }
  throw new ApiError('TOKEN_NOT_EXPIRED');
}

module.exports = {
  createToken,
  createRefreshToken,
  verify,
  refreshTokens
};
