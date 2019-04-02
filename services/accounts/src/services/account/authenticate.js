const tokens = require('../tokens');
const Account = require('../../models/account');
const { validatePassword } = require('./validate-password');
const { ApiError } = require('../../configurations/error');

async function authenticate(accountInfo) {
  const account = await Account.findOne({ email: accountInfo.email });
  if (!account) throw new ApiError('ACCOUNT_NOT_FOUND');
  const trustAccount = await validatePassword(
    accountInfo.password,
    account.password
  );
  if (!trustAccount) throw new ApiError('INVALID_PASSWORD');
  const token = tokens.createToken(account._id.toString());
  await account.save();
  return { id: account._id.toString(), token };
}

module.exports = authenticate;
