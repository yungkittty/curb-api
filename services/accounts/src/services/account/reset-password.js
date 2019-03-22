const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function resetPassword(newCode, newPassword) {
  const account = await Account.findOne({ codePassword: newCode });
  if (!account) throw new ApiError('INVALID_CODE');
  if (newCode !== account.codePassword) {
    throw new ApiError('ACCOUNT_CODE_DIFFERENT');
  }
  account.codePassword = null;
  account.password = newPassword;
  await account.save();
}

module.exports = resetPassword;
