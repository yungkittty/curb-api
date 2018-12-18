const mongoose = require('mongoose');

const User = require('../models/user');

async function create(newUser) {
  const currentDate = new Date();
  const user = new User({
    _id: mongoose.Types.ObjectId(newUser.id),
    name: newUser.name,
    dateCreation: currentDate
  });
  const saved = await user.save();
  if (!saved) return null;
  return user.getPublicFields();
}

module.exports = create;
