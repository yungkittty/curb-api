const mongoose = require('mongoose');

const User = require('../models/user');

function create(newUser) {
  try {
    const currentDate = new Date();
    const user = new User({
      _id: mongoose.Types.ObjectId(newUser._id),
      name: newUser.name,
      dateCreation: currentDate
    });
    user.save();
    return user.getPublicFields();
  } catch (error) {
    return 500;
  }
}

module.exports = create;
