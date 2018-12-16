const Account = require('../../models/account');

async function update(id, newEmail, newPassword) {
  const account = await Account.findById({ _id: id });
  if (newEmail) account.email = newEmail;
  if (newPassword) account.password = newPassword;
  const saved = account.save();
  if (!saved) return null;
  return account.getPublicFields();
}

module.exports = update;
