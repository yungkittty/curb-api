const { Post } = require('../../models/post');

async function reaction(postId, userId) {
  const post = await Post.findOne({ _id: postId });
  const added = await post.reaction.addToSet(userId);
  if (added.length === 0) {
    // user already reacted to the post
    post.reaction.splice(post.reaction.indexOf(userId), 1);
  }
  await post.save();
  return { reaction: post.reaction };
}

module.exports = reaction;
