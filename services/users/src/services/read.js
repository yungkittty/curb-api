const User = require('../models/user');

async function read(id) {
  const user = await User.findById(id);
  return user.getPublicFields();
}

module.exports = read;
