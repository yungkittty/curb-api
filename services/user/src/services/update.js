const User = require('../../../../models/user');

async function update(id, newPassword) {
  const user = await User.findByIdAndUpdate(
    id,
    { $set: { password: newPassword } },
    { new: true }
  );
  return user;
}

module.exports = update;
