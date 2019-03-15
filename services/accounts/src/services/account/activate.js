const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function activate(id, newCode) {
  const account = await Account.findById({ _id: id });
  if (!account) throw new ApiError('ACCOUNT_NOT_FOUND');
  console.log('verif=>', account.code === undefined || account.active);
  if (account.active) {
    throw new ApiError('ACCOUNT_ALREADY_ACTIVE');
  }
  if (newCode !== account.codeVerification) {
    throw new ApiError('ACCOUNT_CODE_DIFFERENT');
  }
  account.codeVerification = null;
  account.active = true;
  await account.save();
}

module.exports = activate;
