const Group = require('../models/group');

async function post(groupId, mediaId) {
  const group = await Group.findById(groupId);
  console.log('Found group=>', group);
  if (!group) throw new Error('Inexistent ressource');
  group.medias = [...group.medias, mediaId];
  await group.save();
  return group;
}

module.exports = post;
