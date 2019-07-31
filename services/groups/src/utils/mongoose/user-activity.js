const mongoose = require('mongoose');
const { Group } = require('../../models/group');

function activity(type) {
  switch (type) {
    case '+post':
      return 1;
    case '-post':
      return -1;
    case '+reaction':
      return 0.5;
    case '-reaction':
      return -0.5;
    default:
      return 0;
  }
}

/**
 *
 * @param {String} type "+ || - post/like"
 */
async function userActivity(groupId, userId, type) {
  const updatedActivity = activity(type);
  const group = await Group.findOne({
    _id: mongoose.Types.ObjectId(groupId)
  });
  const user = group.users.filter(usr => usr.userId.toString() === userId).pop();
  user.activity += updatedActivity;
  await user.save();
  await group.save();
}

module.exports = userActivity;
