const Group = require('../models/group');
const { ApiError } = require('../configurations/error');

async function addPost(groupId, mediaId, type) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUP_NOT_FOUND');
  if (!group.mediaTypes.includes(type)) {
    throw new ApiError('BAD_MEDIATYPES');
  }
  if (group.medias.includes(mediaId)) {
    throw new ApiError('MEDIA_ALREADY_PRESENT');
  }
  group.medias = [...group.medias, mediaId];
  await group.save();
  return group;
}

module.exports = addPost;
