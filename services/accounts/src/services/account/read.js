const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function read(id) {
  const account = await Account.findById(id);
  if (!account) throw new ApiError('ACCOUNTS_NOT_FOUND');
  return { ...account.getPublicFields() };
}

module.exports = read;
