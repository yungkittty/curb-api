const Account = require('../../models/account');
const { ApiError } = require('../../configurations/error');

async function updateCodeVerification(id, code) {
  const account = await Account.findById({ _id: id });
  if (!account) throw new ApiError('ACCOUNTS_NOT_FOUND');
  if (account.active) {
    throw new ApiError('ACCOUNTS_ALREADY_ACTIVE');
  }
  if (code) account.codeVerification = code;
  await account.save();
}

module.exports = updateCodeVerification;
