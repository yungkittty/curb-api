const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');
const tokens = require('../tokens');

async function generateTokenVerification(id, code) {
  const account = await Account.findById({ _id: id });
  if (!account) throw new ApiError('ACCOUNT_NOT_FOUND');
  if (account.active) {
    throw new ApiError('ACCOUNT_ALREADY_ACTIVE');
  }
  // GENERER UN TOKEN AVEC ID + CODE
  if (code) account.codeVerification = code;
  await account.save();
  const token = tokens.generateToken({ id, code }, '30m');
  return { token };
}

module.exports = generateTokenVerification;
