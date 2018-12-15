const User = require('../../models/user');
const tokens = require('../tokens/');

async function logout(token) {
  try {
    const decoded = await tokens.verify(token, 'token');
    const user = await User.findById({ _id: decoded.payload.userId });
    if (!user) return null;
    user.refreshToken = null;
    user.save();
    return user;
  } catch (error) {
    return null;
  }
}

module.exports = logout;
