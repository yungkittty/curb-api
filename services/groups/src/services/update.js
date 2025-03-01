const { Group } = require('../models/group');

const { ApiError } = require('../configurations/error');

async function update(group, groupId, userId) {
  const updatedGroup = await Group.findById({ _id: groupId });
  if (!updatedGroup) throw new ApiError('GROUPS_NOT_FOUND');
  if (!(updatedGroup.creatorId === userId)) {
    throw new ApiError('GROUPS_USER_NOT_CREATOR');
  }
  updatedGroup.status = group.status ? group.status : updatedGroup.status;
  updatedGroup.name = group.name ? group.name : updatedGroup.name;
  updatedGroup.mediaTypes = group.mediaTypes ? group.mediaTypes : updatedGroup.mediaTypes;
  updatedGroup.theme = group.theme ? group.theme : updatedGroup.theme;
  updatedGroup.description = group.description ? group.description : updatedGroup.description;
  updatedGroup.category = group.category ? group.category : updatedGroup.category;
  await updatedGroup.save();
  return group;
}

module.exports = update;
