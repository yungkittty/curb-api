const tokens = require('../tokens');
const Account = require('../../models/account');
const { validatePassword } = require('./validate-password');

async function authenticate(accountInfo) {
  try {
    const account = await Account.findOne({ email: accountInfo.email });
    if (!account) return null;
    const trustAccount = await validatePassword(
      accountInfo.password,
      account.password
    );
    if (!trustAccount) return null;
    const token = tokens.createToken(account._id.toString());
    const refreshToken = tokens.createRefreshToken(account._id.toString());
    if (!token || !refreshToken) return null;
    account.refreshToken = refreshToken;
    account.save();
    return { id: account._id.toString(), token, refreshToken };
  } catch (error) {
    throw error;
  }
}

module.exports = authenticate;
