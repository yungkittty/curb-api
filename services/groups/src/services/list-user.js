const mongoose = require('mongoose');
const { Group } = require('../models/group');
const isUserInGroup = require('../utils/mongoose/is-user-in-group');
const { ApiError } = require('../configurations/error');

async function listUser({
  page = 1, count = 5, active = undefined, groupId, userId = undefined
}) {
  const response = { page, count };
  const skip = (page - 1) * count;

  const group = Group.findOne({ _id: groupId });
  const userInGroup = await isUserInGroup(group._id, userId);
  if (group.status === 'private' && (!userInGroup || !userId)) {
    throw new ApiError('GROUPS_FORBIDEN_READ');
  }

  const list = await Group.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(groupId),
        status: { $ne: 'private' }
      }
    },
    {
      $project: {
        _id: false,
        users: active
          ? {
            $filter: {
              input: '$users',
              as: 'user',
              cond: { $eq: ['$$user.active', true] }
            }
          }
          : {
            $filter: {
              input: '$users',
              as: 'user',
              cond: { $ne: ['$$user.active', null] }
            }
          }
      }
    },
    {
      $project: { _id: false, users: { $slice: ['$users', skip, count] } }
    }
  ]);

  const { users = [] } = list[0] || [];
  return { ...response, data: users };
}

module.exports = listUser;
