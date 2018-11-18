const User = require('../../../../models/user');

function create(newUser) {
  const currentDate = new Date();
  const user = new User({
    login: newUser.login,
    password: newUser.password,
    dateCreation: currentDate
  });
  user.save();
  return user;
}

module.exports = create;
