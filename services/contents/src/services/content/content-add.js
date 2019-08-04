const mongoose = require('mongoose');
const { Content } = require('../../models/content');
const { Post } = require('../../models/post');
const { ApiError } = require('../../configurations/error');

async function contentAdd(type, postId, userId, data) {
  const content = new Content({
    post: new mongoose.Types.ObjectId(postId),
    type,
    data
  });
  const post = await Post.findOne({ _id: postId });

  if (userId !== post.creatorId) {
    throw new ApiError('CONTENTS_FORBIDDEN_WRITE');
  }

  await content.save();
  post.medias.unshift(content.id);
  await post.save();
  // const t = await Post.findOne({ _id: postId })
  //   .populate('medias')
  //   .exec();
  // console.log('POPULATE=>', t);
  return content;
}

module.exports = contentAdd;
