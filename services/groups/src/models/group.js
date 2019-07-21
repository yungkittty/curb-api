const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { ApiError } = require('../configurations/error');

mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true });

const groupSchema = mongoose.Schema(
  {
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
    medias: { type: [String], maxlength: 10 },
    mediaTypes: {
      type: [String],
      required: true,
      enum: {
        values: ['location', 'text', 'image', 'video'],
        message: 'GROUPS_BAD_MEDIATYPES'
      }
    },
    theme: { type: String },
    description: {
      type: String,
      message: 'GROUPS_BAD_DESCRIPTION',
      maxlength: 300
    },
    category: {
      type: String,
      enum: {
        values: [
          'Gaming',
          'Sport',
          'Lifestyle',
          'Technology',
          'Food and Drink',
          'Business',
          'Science',
          'Travel',
          'Careers',
          'Health',
          'Fashion',
          'Pets',
          'Music',
          'Movies',
          'Events'
        ],
        message: 'GROUPS_UNKNOW_CATEGORY'
      }
    },
    rank: { type: Number, default: 0 },
    activity: { type: Number, default: 0 }
  },
  // will generate automaticly createdAt & updateAt
  { timestamps: true }
);

/* eslint-disable no-param-reassign */
function transform(doc, ret) {
  ret.id = ret._id;
  delete ret._id;
  return ret;
}
/* eslint-enable no-param-reassign */
mongoose.set('toJSON', { versionKey: false, transform });
mongoose.set('toObject', { versionKey: false, transform });

groupSchema.plugin(uniqueValidator, { message: 'GROUPS_DUPLICATE_{PATH}' });

// eslint-disable-next-line
groupSchema.methods.getPublicFields = function() {
  const {
    __v, _id, rank, ...publicGroup
  } = this.toObject();
  return { id: _id, ...publicGroup };
};

// TODO do rank compute here
// groupSchema.pre('save', (doc, next) => {
//   // return next();
// });

groupSchema.post('save', async (error, doc, next) => {
  // console.log('MONGO ERROR:', error);
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new ApiError('GROUPS_ALREADY_EXIST'));
  }
  if (error.errors[Object.keys(error.errors)[0]]) {
    return next(new ApiError(error.errors[Object.keys(error.errors)[0]].message.toUpperCase()));
  }
  return next(error);
});

// TODO Ajouter un record => chaque semaine add Activity to Ranke

module.exports = mongoose.model('groups', groupSchema);
