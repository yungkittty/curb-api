const User = require('../models/user');

async function avatar(userId, avatarUrl) {
  const updatedUser = await User.findById({ _id: userId });
  if (!updatedUser) throw new Error('USER_NOT_FOUND');
  updatedUser.avatarUrl = avatarUrl || updatedUser.avatarUrl;
  await updatedUser.save();
  return updatedUser;
}

module.exports = avatar;
