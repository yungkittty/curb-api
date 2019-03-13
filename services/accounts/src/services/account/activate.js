const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function activate(id, newCode) {
  const account = await Account.findById({ _id: id });
  if (!account) throw new ApiError('ACCOUNT_NOT_FOUND');
  if (account.code === undefined || account.active) {
    throw new ApiError('ACCOUNT_ALREADY_ACTIVE');
  }
  if (newCode !== account.code) throw new ApiError('ACCOUNT_CODE_DIFFERENT');
  account.code = null;
  account.active = true;
  await account.save();
}

module.exports = activate;
