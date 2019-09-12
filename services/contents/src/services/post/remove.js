const { Post } = require('../../models/post');
const groupPostDelete = require('../../utils/group-post-delete');
const removeContent = require('../../services/content/remove');

async function remove(token, postId) {
  const post = await Post.findOneAndRemove({ _id: postId });
  post.medias.forEach(async (medias) => {
    await removeContent(medias, false);
  });
  await groupPostDelete(token, post.groupId, post.id);
  return post;
}

module.exports = remove;
