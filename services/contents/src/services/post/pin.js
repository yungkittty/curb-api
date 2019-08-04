const { Post } = require('../../models/post');

async function pin(postId) {
  const post = await Post.findOne({ _id: postId });
  post.pinned = !post.pinned;
  await post.save();
}

module.exports = pin;
