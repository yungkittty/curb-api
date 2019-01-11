const Group = require('../models/group');

async function update(group, userId) {
  const updatedGroup = await Group.findById({ _id: group.id });
  if (!(updatedGroup.creatorId === userId)) return null;
  if (group.status) updatedGroup.status = group.status;
  if (group.name) updatedGroup.name = group.name;
  const saved = updatedGroup.save();
  if (!saved) return null;
  return group;
}

module.exports = update;
