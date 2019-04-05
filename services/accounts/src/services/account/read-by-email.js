const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function readByEmail(email) {
  const account = await Account.findOne({ email });
  if (!account) throw new ApiError('ACCOUNTS_NOT_FOUND');
  return { ...account.getPublicFields() };
}

module.exports = readByEmail;
