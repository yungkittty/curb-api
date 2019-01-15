const Group = require('../models/group');

async function update(group, userId) {
  const updatedGroup = await Group.findById({ _id: group.id });
  if (!(updatedGroup.creatorId === userId)) return null;
  updatedGroup.status = group.status ? group.status : updatedGroup.status;
  updatedGroup.name = group.name ? group.name : updatedGroup.name;
  updatedGroup.mediaTypes = group.mediaTypes
    ? group.mediaTypes
    : updatedGroup.mediaTypes;
  updatedGroup.theme = group.theme ? group.theme : updatedGroup.theme;
  const saved = await updatedGroup.save();
  if (!saved) return null;
  return group;
}

module.exports = update;
