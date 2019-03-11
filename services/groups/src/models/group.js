const mongoose = require('mongoose');
const { ApiError } = require('../configurations/error');

mongoose.connect(
  'mongodb://db/Curb',
  { useNewUrlParser: true }
);

const groupSchema = mongoose.Schema({
  creatorId: { type: String, required: [true, 'MISSING_CREATOR_ID'] },
  name: { type: String, unique: true, required: [true, 'MISSING_GROUP_NAME'] },
  status: {
    type: String,
    required: [true, 'MISSING_STATUS'],
    enum: { values: ['public', 'private'], message: 'BAD_STATUS' }
  },
  avatarUrl: {
    type: String,
    default: '/contents/default/avatars/groups/medium.png'
  },
  dateCreation: Date,
  users: { type: [String] },
  medias: { type: [String] },
  mediaTypes: {
    type: [String],
    required: true,
    enum: {
      values: ['localisation', 'text', 'image', 'video'],
      message: 'BAD_MEDIATYPES'
    }
  },
  theme: { type: String }
});

// eslint-disable-next-line
groupSchema.methods.getPublicFields = function() {
  const { __v, _id, ...publicGroup } = this.toObject();
  return { id: _id, ...publicGroup };
};

groupSchema.post('save', async (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new ApiError('GROUP_ALREADY_EXIST'));
  }
  if (error.errors[Object.keys(error.errors)[0]]) {
    return next(
      new ApiError(error.errors[Object.keys(error.errors)[0]].message)
    );
  }
  return next(error);
});

module.exports = mongoose.model('groups', groupSchema);
