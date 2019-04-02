const Account = require('../../models/account');
const tokens = require('../tokens/');
const { ApiError } = require('../../configurations/error');

async function logout(token) {
  const id = await tokens.verify(token, 'token');
  const account = await Account.findById(id);
  if (!account) throw new ApiError('ACCOUNT_NOT_FOUND');
  await account.save();
  return account;
}

module.exports = logout;
