const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function isAccountValid(id) {
  const account = await Account.findById({ _id: id });
  if (!account) throw new ApiError('ACCOUNTS_NOT_FOUND');
  return account.active;
}

module.exports = isAccountValid;
