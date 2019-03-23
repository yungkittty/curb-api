const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function update(id, newEmail, newPassword) {
  const account = await Account.findById({ _id: id });
  if (!account) throw new ApiError('ACCOUNT_NOT_FOUND');
  if (newEmail) account.email = newEmail;
  if (newPassword) account.password = newPassword;
  await account.save();
  return account.getPublicFields();
}

module.exports = update;
