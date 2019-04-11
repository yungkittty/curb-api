const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function updateCodePassword(id, password) {
  const account = await Account.findById({ _id: id });
  if (!account) throw new ApiError('ACCOUNTS_NOT_FOUND');
  if (password) account.codePassword = password;
  await account.save();
}

module.exports = updateCodePassword;
