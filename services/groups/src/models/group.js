const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { ApiError } = require('../configurations/error');

mongoose.connect(
  'mongodb://db/Curb',
  { useNewUrlParser: true }
);

const groupSchema = mongoose.Schema({
  creatorId: { type: String, required: [true, 'GROUPS_MISSING_CREATOR_ID'] },
  name: {
    type: String,
    unique: true,
    required: [true, 'GROUPS_MISSING_GROUP_NAME']
  },
  status: {
    type: String,
    required: [true, 'GROUPS_MISSING_STATUS'],
    enum: { values: ['public', 'private'], message: 'GROUPS_BAD_STATUS' }
  },
  avatarUrl: {
    type: String
  },
  dateCreation: Date,
  users: { type: [String] },
  medias: { type: [String] },
  mediaTypes: {
    type: [String],
    required: true,
    enum: {
      values: ['localisation', 'text', 'image', 'video'],
      message: 'GROUPS_BAD_MEDIATYPES'
    }
  },
  theme: { type: String }
});

groupSchema.plugin(uniqueValidator, { message: 'GROUPS_DUPLICATE_{PATH}' });

// eslint-disable-next-line
groupSchema.methods.getPublicFields = function() {
  const { __v, _id, ...publicGroup } = this.toObject();
  return { id: _id, ...publicGroup };
};

groupSchema.post('save', async (error, doc, next) => {
  console.log('MONGO ERROR:', error);
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new ApiError('GROUPS_ALREADY_EXIST'));
  }
  if (error.errors[Object.keys(error.errors)[0]]) {
    return next(
      new ApiError(
        error.errors[Object.keys(error.errors)[0]].message.toUpperCase()
      )
    );
  }
  return next(error);
});

module.exports = mongoose.model('groups', groupSchema);
