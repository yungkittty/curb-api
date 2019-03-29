const mongoose = require('mongoose');
const User = require('../models/user');
const { ApiError } = require('../configurations/error');

async function create(newUser) {
  const currentDate = new Date();
  const user = new User({
    _id: mongoose.Types.ObjectId(newUser.id),
    name: newUser.name,
    dateCreation: currentDate
  });
  try {
    await user.save();
  } catch (error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      throw new ApiError('USER_ALREADY_EXIST');
    }
    throw error;
  }
  return user.getPublicFields();
}

module.exports = create;
