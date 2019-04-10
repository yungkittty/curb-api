const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');
const tokens = require('../tokens');

async function updateCodeVerification(id, code) {
  const account = await Account.findById(id);
  if (!account) throw new ApiError('ACCOUNT_NOT_FOUND');
  if (account.active) {
    throw new ApiError('ACCOUNT_ALREADY_ACTIVE');
  }
  // GENERER UN TOKEN AVEC ID + CODE
  if (code) account.codeVerification = code;
  await account.save();
  const token = tokens.generateToken(
    { id, code },
    process.env.JWT_EMAILING_TOKEN_EXPIRE
  );
  return { token };
}

module.exports = updateCodeVerification;
