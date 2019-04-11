const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function me(id) {
  const account = await Account.findById(id);
  if (!account) throw new ApiError('ACCOUNTS_NOT_FOUND');
  return { id: account._id.toString() };
}

module.exports = me;
