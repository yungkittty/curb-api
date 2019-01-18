const Group = require('../models/group');

async function permissions(groupId, userId) {
  const group = await Group.findById(groupId);
  if (!group) throw new Error('Inexistent resource');
  const creator = group.creatorId === userId;
  const write = creator ? true : group.users.includes(userId);
  const read = creator
    ? true
    : group.status === 'public' || group.users.includes(userId);
  return { creator, read, write };
}

module.exports = permissions;
