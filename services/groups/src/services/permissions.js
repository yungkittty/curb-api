const Group = require('../models/group');

async function permissions(groupId, userId) {
  const group = await Group.findById(groupId);
  console.log('FOUND=>', group, userId);
  if (!group) throw new Error('Inexistent resource');
  let read = false;
  let write = false;
  let creator = false;
  if (group.creatorId === userId) creator = true;
  if (group.status === 'public') read = true;
  if (group.users.includes(userId)) {
    write = true;
    read = true;
  }
  console.log('PERMISSIONS=>', { read, write, creator });
  return { read, write, creator };
}

module.exports = permissions;
