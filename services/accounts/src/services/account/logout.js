const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function logout(id) {
  const account = await Account.findById(id);
  if (!account) throw new ApiError('ACCOUNTS_NOT_FOUND');
  return account;
}

module.exports = logout;
