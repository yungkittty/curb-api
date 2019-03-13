const Group = require('../models/group');
const { ApiError } = require('../configurations/error');

async function update(group, userId) {
  const updatedGroup = await Group.findById({ _id: group.id });
  if (!updatedGroup) throw new ApiError('GROUP_NOT_FOUND');
  if (!(updatedGroup.creatorId === userId)) {
    throw new ApiError('USER_NOT_CREATOR');
  }
  updatedGroup.status = group.status ? group.status : updatedGroup.status;
  updatedGroup.name = group.name ? group.name : updatedGroup.name;
  updatedGroup.mediaTypes = group.mediaTypes
    ? group.mediaTypes
    : updatedGroup.mediaTypes;
  updatedGroup.theme = group.theme ? group.theme : updatedGroup.theme;
  await updatedGroup.save();
  return group;
}

module.exports = update;
