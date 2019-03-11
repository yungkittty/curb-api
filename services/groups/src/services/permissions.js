const Group = require('../models/group');
const { ApiError } = require('../configurations/error');

async function permissions(groupId, userId) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUP_NOT_FOUND');
  const creator = group.creatorId === userId;
  const write = creator ? true : group.users.includes(userId);
  const read = creator
    ? true
    : group.status === 'public' || group.users.includes(userId);
  return { creator, read, write };
}

module.exports = permissions;
