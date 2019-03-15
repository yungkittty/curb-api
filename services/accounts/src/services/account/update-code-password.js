const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function updateCodePassword(id, newPassword) {
  const account = await Account.findById({ _id: id });
  if (!account) throw new ApiError('ACCOUNT_NOT_FOUND');
  if (newPassword) account.codePassword = newPassword;
  await account.save();
}

module.exports = updateCodePassword;
