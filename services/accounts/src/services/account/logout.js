const Account = require('../../models/account');
const tokens = require('../tokens/');

async function logout(token) {
  try {
    const id = await tokens.verify(token, 'token');
    const account = await Account.findById(id);
    if (!account) return null;
    account.refreshToken = null;
    account.save();
    return account;
  } catch (error) {
    return null;
  }
}

module.exports = logout;
