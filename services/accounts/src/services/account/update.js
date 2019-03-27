const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function update(id, email) {
  const account = await Account.findById({ _id: id });
  if (!account) throw new ApiError('ACCOUNT_NOT_FOUND');
  if (email) account.email = email;
  await account.save();
  return account.getPublicFields();
}

module.exports = update;
