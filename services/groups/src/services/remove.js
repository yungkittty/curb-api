const Group = require('../models/group');

async function remove(groupId, userId) {
  const group = await Group.findById(groupId);
  if (!group) throw new Error('Inexistent resource');
  if (!(group.creatorId === userId)) return null;
  await Group.deleteOne({ _id: groupId });
  return group;
}

module.exports = remove;
