const Group = require('../models/group');

async function avatar(groupId, avatarUrl) {
  const updatedGroup = await Group.findById({ _id: groupId });
  if (!updatedGroup) return null;
  updatedGroup.avatarUrl = avatarUrl || updatedGroup.avatarUrl;
  const saved = await updatedGroup.save();
  if (!saved) return null;
  return updatedGroup;
}

module.exports = avatar;
