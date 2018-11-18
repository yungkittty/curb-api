const tokens = require('../tokens');
const User = require('../../user');
const { validatePassword } = require('./validate-password');

async function authenticate(userInfo) {
  try {
    const user = await User.findOne({ login: userInfo.login });
    if (!user) return null;
    const trustUser = await validatePassword(userInfo.password, user.password);
    if (!trustUser) return null;
    const token = tokens.createToken(user._id);
    const refreshToken = tokens.createRefreshToken(user._id);
    if (!token || !refreshToken) return null;
    user.refreshToken = refreshToken;
    user.save();
    // eslint-disable-next-line
    const { password, __v, _id, ...safeUser } = user.toObject();
    /**
     * Schema.options.toObject() ~ toJSON();
     */
    return { user: { id: _id, ...safeUser }, token };
  } catch (error) {
    throw error;
  }
}

module.exports = authenticate;
