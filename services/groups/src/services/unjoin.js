const Group = require('../models/group');
const { ApiError } = require('../configurations/error');

async function unJoin({ groupId, userId }) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUP_NOT_FOUND');
  if (group.creatorId === userId) throw new ApiError('UNAUTHORIZED_UNJOIN');
  group.users = group.users.filter(user => user !== userId);
  await group.save();
  return group;
}

module.exports = unJoin;
