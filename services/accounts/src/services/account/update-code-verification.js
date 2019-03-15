const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function updateCodeVerification(id, newCode) {
  const account = await Account.findById({ _id: id });
  if (!account) throw new ApiError('ACCOUNT_NOT_FOUND');
  if (account.active) {
    throw new ApiError('ACCOUNT_ALREADY_ACTIVE');
  }
  if (newCode) account.codeVerification = newCode;
  await account.save();
}

module.exports = updateCodeVerification;
