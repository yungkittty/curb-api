const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function validateCodePassword(code, email) {
  const account = await Account.findOne({ email });
  if (!account) throw new ApiError('ACCOUNTS_NOT_FOUND');
  if (!account.codePassword) {
    throw new ApiError('ACCOUNTS_CODE_UNAVAILABLE');
  }
  if (code !== account.codePassword) {
    throw new ApiError('ACCOUNTS_CODE_DIFFERENT');
  }
}

module.exports = validateCodePassword;
