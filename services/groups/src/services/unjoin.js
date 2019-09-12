const { Group } = require('../models/group');
const { ApiError } = require('../configurations/error');
const removeGroupUser = require('../utils/mongoose/remove-group-user');

async function unJoin({ groupId, userId }) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
  if (group.creatorId === userId) throw new ApiError('GROUPS_FORBIDEN_UNJOIN');

  await removeGroupUser(group, userId);
  await group.save();
  return group;
}

module.exports = unJoin;
