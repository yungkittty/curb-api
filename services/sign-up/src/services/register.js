const User = require('../../../../models/user');

async function register(user) {
  const newUser = new User({
    login: user.login,
    password: user.password,
    dateCreation: Date.now()
  });
  const saved = await newUser.save();
  return saved;
}

module.exports = register;
