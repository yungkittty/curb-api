const Group = require('../models/group');

async function unJoin({ groupId, userId }) {
  const group = await Group.findById(groupId);
  if (!group) throw new Error('Inexistent resource');
  if (group.creatorId === userId) return null;
  group.users = group.users.filter(user => user !== userId);
  await group.save();
  return group;
}

module.exports = unJoin;
