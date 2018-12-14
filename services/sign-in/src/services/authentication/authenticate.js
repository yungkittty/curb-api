const tokens = require('../tokens');
const User = require('../../../../../models/user');
const { validatePassword } = require('./validate-password');

async function authenticate(userInfo) {
  try {
    const user = await User.findOne({ email: userInfo.email });
    if (!user) return null;
    const trustUser = await validatePassword(userInfo.password, user.password);
    if (!trustUser) return null;
    const token = tokens.createToken(user._id.toString());
    const refreshToken = tokens.createRefreshToken(user._id.toString());
    if (!token || !refreshToken) return null;
    user.refreshToken = refreshToken;
    user.save();
    return { id: user._id.toString(), token, refreshToken };
  } catch (error) {
    throw error;
  }
}

module.exports = authenticate;
