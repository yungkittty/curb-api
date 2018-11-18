const User = require('../../../../models/user');

async function read(id) {
  const user = await User.findById(id);
  return user;
}

module.exports = read;
