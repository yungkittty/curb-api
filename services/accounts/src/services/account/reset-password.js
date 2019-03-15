const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function resetPassword(id, newCode, newPassword) {
  const account = await Account.findById({ _id: id });
  if (!account) throw new ApiError('ACCOUNT_NOT_FOUND');
  if (newCode !== account.codePassword) {
    throw new ApiError('ACCOUNT_CODE_DIFFERENT');
  }
  account.codePassword = null;
  account.password = newPassword;
  await account.save();
}

module.exports = resetPassword;
