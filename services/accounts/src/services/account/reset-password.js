const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function resetPassword(email, code, password) {
  const account = await Account.findOne({ email });
  if (!account) throw new ApiError('ACCOUNTS_NOT_FOUND');
  if (code !== account.codePassword) {
    throw new ApiError('ACCOUNTS_CODE_DIFFERENT');
  }
  account.codePassword = null;
  account.password = password;
  await account.save();
}

module.exports = resetPassword;
