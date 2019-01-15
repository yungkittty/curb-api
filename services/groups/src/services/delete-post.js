const Group = require('../models/group');

async function deletePost(groupId, mediaId) {
  const group = await Group.findById(groupId);
  if (!group) throw new Error('Inexistent ressource');
  group.medias = group.medias.filter(media => media !== mediaId);
  await group.save();
  return group;
}

module.exports = deletePost;
