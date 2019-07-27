const mongoose = require('mongoose');
const { UserGroup } = require('../../models/user-group');
const { Group } = require('../../models/group');
const { ApiError } = require('../../configurations/error');

async function addGroupUser(group, userId) {
  const newUser = new UserGroup({
    userId: mongoose.Types.ObjectId(userId)
  });

  const modified = await Group.updateOne(
    {
      _id: group._id,
      'users.userId': {
        $ne: new mongoose.Types.ObjectId(userId)
      }
    },
    {
      $push: {
        users: newUser
      }
    }
  );

  if (modified.nModified === 0 || modified.ok !== 1) {
    throw new ApiError('GROUPS_USER_ALREADY_JOIN');
  }
  await newUser.save();
  await group.save();
  return newUser.userId;
}

module.exports = addGroupUser;
