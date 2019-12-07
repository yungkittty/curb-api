const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { userGroupSchema } = require('./user-group');
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
    users: [userGroupSchema],
    posts: { type: [String], maxlength: 10 },
    mediaTypes: {
      type: [String],
      required: true,
      enum: {
        values: ['location', 'text', 'image', 'video', 'event', 'poll'],
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
      // default: 'other',
      enum: {
        values: [
          'business',
          'science',
          'games',
          'events',
          'movies',
          'music',
          'reading',
          'sport',
          'spirituality',
          'foodAndDrink',
          'art',
          'nature',
          'politics',
          'philosophy',
          'travel',
          'vehicles',
          'beauty',
          'clothing',
          'computers',
          'electronics',
          'other'
        ],
        message: 'GROUPS_UNKNOW_CATEGORY'
      }
    },
    rank: { type: Number, default: 0 },
    activity: { type: Number, default: 0 },
    quartile: { type: Number, default: 0 }
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
 __v, _id, rank, activity, ...publicGroup 
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
    return next(
      new ApiError(
        error.errors[Object.keys(error.errors)[0]].message.toUpperCase()
      )
    );
  }
  return next(error);
});

module.exports.Group = mongoose.model('groups', groupSchema);
module.exports.groupSchema = groupSchema;
