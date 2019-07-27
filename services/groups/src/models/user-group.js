const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { ApiError } = require('../configurations/error');

mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true });

const userGroupSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId },
    active: { type: Boolean, default: false },
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

mongoose.set('toJSON', { versionKey: false, transform });
mongoose.set('toObject', { versionKey: false, transform });

userGroupSchema.plugin(uniqueValidator, { message: 'USERGROUP_DUPLICATE_{PATH}' });

userGroupSchema.post('save', async (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new ApiError('USERGROUP_ALREADY_EXIST'));
  }
  const err = error.errors[Object.keys(error.errors)[0]];
  if (err) {
    const errorMessage = err.message.toUpperCase();
    return next(new ApiError(errorMessage));
  }
  return next(error);
});

module.exports.UserGroup = mongoose.model('usergroup', userGroupSchema);
module.exports.userGroupSchema = userGroupSchema;
