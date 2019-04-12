const Group = require('../models/group');
const { ApiError } = require('../configurations/error');

async function deletePost(groupId, mediaId) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
  if (!group.medias.includes(mediaId)) {
    throw new ApiError('GROUPS_MEDIA_NOT_FOUND');
  }
  group.medias = group.medias.filter(media => media !== mediaId);
  await group.save();
  return group;
}

module.exports = deletePost;
