const { Group } = require('../models/group');

const ranking = require('./ranking');
const { ApiError } = require('../configurations/error');
const userActivity = require('../utils/mongoose/user-activity');

async function deletePost(groupId, postId, userId) {
  const group = await Group.findById(groupId);
  if (!group) throw new ApiError('GROUPS_NOT_FOUND');
  if (!group.posts.includes(postId)) {
    throw new ApiError('GROUPS_MEDIA_NOT_FOUND');
  }
  group.posts = group.posts.filter(media => media !== postId);
  ranking(group._id);
  await userActivity(group._id, userId, '-post');
  await group.save();
  return group;
}

module.exports = deletePost;
