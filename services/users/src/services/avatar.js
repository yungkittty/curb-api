const User = require('../models/user');

async function avatar(userId, avatarUrl) {
  const updatedUser = await User.findById({ _id: userId });
  if (!updatedUser) return null;
  updatedUser.avatarUrl = avatarUrl || updatedUser.avatarUrl;
  const saved = await updatedUser.save();
  if (!saved) return null;
  return updatedUser;
}

module.exports = avatar;
