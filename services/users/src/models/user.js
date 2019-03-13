const mongoose = require('mongoose');
const { ApiError } = require('../configurations/error');

mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true });

const userSchema = mongoose.Schema({
  _id: { type: mongoose.SchemaTypes.ObjectId, auto: false },
  name: { type: String, required: [true, 'MISSING_NAME'], unique: true },
  dateCreation: Date,
  avatarUrl: {
    type: String,
    default: '/contents/default/avatars/users/medium.png'
  }
});

// eslint-disable-next-line
userSchema.methods.getPublicFields = function() {
  // eslint-disable-next-line
  const { password, __v, _id, ...publicUser } = this.toObject();
  return { id: _id, ...publicUser };
};

userSchema.post('save', async (error, doc, next) => {
  console.log('MONGO ERROR:', error);
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new ApiError('USER_ALREADY_EXIST'));
  }
  if (error.errors[Object.keys(error.errors)[0]]) {
    return next(
      new ApiError(error.errors[Object.keys(error.errors)[0]].message)
    );
  }
  return next(error);
});

module.exports = mongoose.model('users', userSchema);
