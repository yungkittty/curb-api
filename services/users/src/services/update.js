const User = require('../models/user');

async function update(id, newPassword) {
  const user = await User.findById({_id: id});
  user.password = newPassword;
  user.save();
  return user.getPublicFields();
}

module.exports = update;
