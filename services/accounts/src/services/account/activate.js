const jwt = require('jsonwebtoken');
const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');
const tokens = require('../tokens');

async function verify(token) {
  try {
    const decoded = await tokens.verifyToken(token);
    if (!decoded) throw new ApiError('ACCOUNTS_EMAILING_TOKEN_INVALID');
    return decoded;
  } catch (error) {
    switch (error.constructor) {
      case jwt.TokenExpiredError:
        throw new ApiError('ACCOUNTS_EMAILING_TOKEN_EXPIRED');
      case jwt.JsonWebTokenError:
        throw new ApiError('ACCOUNTS_EMAILING_INVALID_TOKEN');
      case jwt.NotBeforeError:
        throw new ApiError('ACCOUNTS_EMAILING_TOKEN_AHEAD_OF_TIME');
      default:
        throw new ApiError('ACCOUNTS_EMAILING_TOKEN_INVALID');
    }
  }
}

async function activate(token) {
  const { payload } = await verify(token);
  const account = await Account.findById(payload.id);
  if (!account) throw new ApiError('ACCOUNTS_NOT_FOUND');
  if (account.active) {
    throw new ApiError('ACCOUNTS_ALREADY_ACTIVE');
  }
  if (payload.code !== account.codeVerification) {
    throw new ApiError('ACCOUNTS_CODE_DIFFERENT');
  }
  account.codeVerification = null;
  account.active = true;
  await account.save();
  return { id: account._id.toString() };
}

module.exports = activate;
