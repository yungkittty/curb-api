const mongoose = require('mongoose');
const { ApiError } = require('../configurations/error');

mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true });

const postSchema = mongoose.Schema(
  {
    creatorId: { type: String, required: [true, 'POSTS_MISSING_CREATOR_ID'] },
    groupId: { type: String, required: [true, 'POSTS_MISSING_GROUP_ID'] },
    medias: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'contents' }],
    pinned: { type: Boolean, default: false },
    reaction: [String],
    report: [String]
  }, // will generate automaticly createdAt & updateAt
  { timestamps: true }
);

// eslint-disable-next-line
postSchema.methods.getPublicFields = function() {
  // eslint-disable-next-line
  const { __v, _id, ...content } = this.toObject();
  return { id: _id, ...content };
};

postSchema.post('save', async (error, doc, next) => {
  // eslint-disable-next-line
  // console.log('MONGO ERROR:', error);
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new ApiError('POSTS_ALREADY_EXIST'));
  }
  if (error.errors[Object.keys(error.errors)[0]]) {
    return next(new ApiError(error.errors[Object.keys(error.errors)[0]].message.toUpperCase()));
  }
  return next(error);
});

module.exports = mongoose.model('posts', postSchema);

module.exports.Post = mongoose.model('posts', postSchema);
module.exports.postSchema = postSchema;
