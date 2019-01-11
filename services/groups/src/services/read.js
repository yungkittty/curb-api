const Group = require('../models/group');

async function read(groupId, userId = undefined) {
  const group = await Group.findById(groupId);
  console.log(group, userId);
  if (!group) throw new Error('Inexistent resource');
  if (group.status === 'private' && !userId && !group.users.includes(userId)) {
    throw new Error('Unauthorized to read');
  }
  return group.getPublicFields();
}

module.exports = read;
