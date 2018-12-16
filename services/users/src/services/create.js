const User = require('../models/user');

const emailRegex = new RegExp('^([\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4})?$');

function create(newUser) {
  try {
    const test = emailRegex.test(newUser.email);
    if (!test) {
      return null;
    }
    const currentDate = new Date();
    const user = new User({
      email: newUser.email,
      name: newUser.name,
      password: newUser.password,
      dateCreation: currentDate
    });
    user.save();
    return user.getPublicFields();
  } catch (error) {
    return 500;
  }
}

module.exports = create;
