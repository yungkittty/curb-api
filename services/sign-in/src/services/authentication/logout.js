const User = require('../../../../../models/user');

async function logout(userInfo) {
  const user = await User.findOne({ login: userInfo.login });
  if (!user) return null;
  user.refreshToken = null;
  user.save();
  return user;
}

module.exports = logout;
