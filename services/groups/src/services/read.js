const Group = require('../models/group');
const { ApiError } = require('../configurations/error');

async function read(groupId, userId = undefined) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
  if (group.status === 'private' && !userId && !group.users.includes(userId)) {
    throw new ApiError('GROUPS_FORBIDEN_READ');
  }
  return group.getPublicFields();
}

module.exports = read;
