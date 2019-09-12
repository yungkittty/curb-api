const { Group } = require('../models/group');
const { ApiError } = require('../configurations/error');
const isUserInGroup = require('../utils/mongoose/is-user-in-group');

async function permissions(groupId, userId) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
  const creator = group.creatorId === userId;
  const userInGroup = await isUserInGroup(group._id, userId);
  const write = creator ? true : userInGroup;
  const read = creator ? true : group.status === 'public' || userInGroup;
  return { creator, read, write };
}

module.exports = permissions;
