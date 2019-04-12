const Group = require('../models/group');
const { ApiError } = require('../configurations/error');

async function avatar(groupId, avatarUrl) {
  const updatedGroup = await Group.findById({ _id: groupId });
  if (!updatedGroup) throw new ApiError('GROUPS_NOT_FOUND');
  updatedGroup.avatarUrl = avatarUrl || updatedGroup.avatarUrl;
  await updatedGroup.save();
  return updatedGroup;
}

module.exports = avatar;
