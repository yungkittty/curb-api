const { Post } = require('../../models/post');
const { ApiError } = require('../../configurations/error');
const groupGet = require('../../utils/group-get');
const remove = require('./remove');

async function report(postId, userId, token) {
  const post = await Post.findOne({ _id: postId });
  const added = await post.report.ids.addToSet(userId);
  if (added.length === 0) {
    throw new ApiError('POSTS_ALREADY_REPORT');
  }
  let deleted = false;
  const response = await groupGet(post.groupId);
  if (post.report.ids.length >= 0.35 * response.data.users) {
    await remove(token, post._id);
    deleted = true;
  }
  await post.save();
  return { deleted };
}

module.exports = report;
