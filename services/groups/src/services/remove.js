const Group = require('../models/group');
const { ApiError } = require('../configurations/error');

async function remove(groupId, userId) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
  if (!(group.creatorId === userId))
    throw new ApiError('GROUPS_USER_NOT_CREATOR');
  await Group.deleteOne({ _id: groupId });
  return group;
}

module.exports = remove;
