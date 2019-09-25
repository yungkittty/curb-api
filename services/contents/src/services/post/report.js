const { Post } = require('../../models/post');
const groupGet = require('../../utils/group-get');
const remove = require('./remove');

async function report(postId, userId, token) {
  const post = await Post.findOne({ _id: postId });
  const added = await post.report.addToSet(userId);
  if (added.length === 0) {
    // user already reported the post
    post.report.splice(post.report.indexOf(userId), 1);
  }
  let deleted = false;
  const response = await groupGet(post.groupId);
  if (post.report.length >= 0.35 * response.data.users) {
    await remove(token, post._id);
    deleted = true;
  }
  await post.save();
  return { report: post.report, deleted };
}

module.exports = report;
