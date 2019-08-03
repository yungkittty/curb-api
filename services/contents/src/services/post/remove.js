const { Post } = require('../../models/post');
const { Content } = require('../../models/content');

// [WIP]
async function remove(postId) {
  const post = await Post.findOneAndRemove({ _id: postId });
  const deleted = await Content.remove({ postId });
  console.log(deleted);
  return post;
}

module.exports = remove;
