const fs = require('fs-extra');
const { Post } = require('../../models/post');
const { Content } = require('../../models/content');

async function remove(contentId, removeInParent = false) {
  const content = await Content.findOneAndDelete({
    _id: contentId
  });
  if (removeInParent) {
    const post = await Post.findOne({ medias: { $in: contentId } });
    await post.medias.pull(contentId);
    await post.save();
  }
  if (content.type === 'image' || content.type === 'video') {
    fs.unlinkSync(`./${content.data.substring('/contents'.length)}`);
  }
}

module.exports = remove;
