const mongoose = require('mongoose');

const { Group } = require('../../models/group');

async function getGroupUser(groupId, userId) {
  const group = await Group.findOne({
    _id: mongoose.Types.ObjectId(groupId)
  });
  const user = group.users.filter(usr => usr.userId.toString() === userId).pop();
  user.activity += 1;
  await user.save();
  await group.save();
  return user;
}

module.exports = getGroupUser;
