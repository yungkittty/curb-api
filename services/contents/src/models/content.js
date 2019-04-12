const mongoose = require('mongoose');
const { ApiError } = require('../configurations/error');

mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true });

const contentSchema = mongoose.Schema({
  creatorId: { type: String, required: [true, 'CONTENTS_MISSING_CREATOR_ID'] },
  groupId: { type: String, required: [true, 'CONTENTS_MISSING_GROUP_ID'] },
  dateCreation: Date,
  type: {
    type: String,
    required: [true, 'CONTENTS_MISSING_TYPE'],
    enum: {
      values: ['location', 'text', 'image', 'video'],
      message: 'CONTENTS_BAD_TYPE'
    }
  },
  data: String
});

// eslint-disable-next-line
contentSchema.methods.getPublicFields = function() {
  // eslint-disable-next-line
  const { __v, _id, ...content } = this.toObject();
  return { id: _id, ...content };
};

contentSchema.post('save', async (error, doc, next) => {
  // eslint-disable-next-line
  console.log('MONGO ERROR:', error);
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new ApiError('CONTENTS_ALREADY_EXIST'));
  }
  if (error.errors[Object.keys(error.errors)[0]]) {
    return next(new ApiError(error.errors[Object.keys(error.errors)[0]].message.toUpperCase()));
  }
  return next(error);
});

module.exports = mongoose.model('contents', contentSchema);
