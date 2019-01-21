const Group = require('../models/group');

async function addPost(groupId, mediaId) {
  const group = await Group.findById(groupId);
  if (!group) throw new Error('Inexistent ressource');
  group.medias = [...group.medias, mediaId];
  await group.save();
  return group;
}

module.exports = addPost;
