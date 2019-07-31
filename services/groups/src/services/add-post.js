const { Group } = require('../models/group');

const { ApiError } = require('../configurations/error');
const ranking = require('./ranking');
const userActivity = require('../utils/mongoose/user-activity');

async function addPost(groupId, mediaId, type, userId) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
  if (!group.mediaTypes.includes(type)) {
    throw new ApiError('GROUPS_BAD_MEDIATYPES');
  }
  if (group.medias.includes(mediaId)) {
    throw new ApiError('GROUPS_MEDIA_ALREADY_PRESENT');
  }
  group.medias = [mediaId, ...group.medias];
  ranking(group._id);
  await userActivity(group._id, userId, '+post');
  await group.save();
  return group;
}

module.exports = addPost;
