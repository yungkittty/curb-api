const User = require('../models/user');
const { ApiError } = require('../configurations/error');

async function remove(id) {
  const user = await User.findByIdAndRemove(id);
  if (!user) throw new ApiError('USERS_NOT_FOUND');
  return user;
}

module.exports = remove;
