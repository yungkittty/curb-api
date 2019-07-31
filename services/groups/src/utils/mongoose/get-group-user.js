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
  // TODO => https://stackoverflow.com/questions/57291201/saving-parent-doc-doesnt-save-subdoc-individually
  // TODO => UserGroup not getting updated as wanted
  return user;
}

module.exports = getGroupUser;
