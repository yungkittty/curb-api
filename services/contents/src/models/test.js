const mongoose = require('mongoose');
const { Content } = require('./content');
const { Post } = require('./post');

const fixture = [
  {
    type: 'image'
  },
  {
    type: 'image'
  },
  {
    type: 'image'
  },
  {
    type: 'video'
  },
  {
    type: 'text'
  }
];

async function create(type, post) {
  const content = new Content({
    postId: post._id,
    type,
    data: 'fixture/'
  });
  await content.save();
  return content._id;
}

async function generate(post) {
  const medias = fixture.map(async (fix) => {
    const id = await create(fix.type, post);
    post.medias.push(id);
    return id;
  });
  const result = await Promise.all(medias);
  return result;
}

async function test() {
  const post = new Post({
    creatorId: new mongoose.Types.ObjectId(),
    groupId: new mongoose.Types.ObjectId()
  });

  const medias = await generate(post);
  await post.save();

  const populatedPost = await Post.findOne({ _id: post._id })
    .populate('medias')
    .exec();

  console.log('-------POPULATE', populatedPost);
  await Post.deleteOne({ _id: post._id });

  medias.forEach(async (media) => {
    await Content.deleteOne({ _id: media });
  });
}

test();
