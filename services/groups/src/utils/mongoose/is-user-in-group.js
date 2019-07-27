const mongoose = require('mongoose');
const { Group } = require('../../models/group');

async function isUserInGroup(groupId, userId) {
  const group = await Group.findOne({
    _id: mongoose.Types.ObjectId(groupId),
    'users.userId': mongoose.Types.ObjectId(userId)
  });
  return group != null;
}

module.exports = isUserInGroup;
