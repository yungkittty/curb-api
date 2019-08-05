const { Post } = require('../../models/post');
const { ApiError } = require('../../configurations/error');

async function reaction(postId, userId) {
  const post = await Post.findOne({ _id: postId });
  const added = await post.reaction.ids.addToSet(userId);
  if (added.length === 0) {
    throw new ApiError('POSTS_ALREADY_REACT');
  }
  post.reaction.number += 1;
  await post.save();
  return { reaction: post.reaction.number };
}

module.exports = reaction;
