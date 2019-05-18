const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { ApiError } = require('../configurations/error');

mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true });

const userSchema = mongoose.Schema({
  _id: { type: mongoose.SchemaTypes.ObjectId, auto: false },
  name: { type: String, required: [true, 'USERS_MISSING_NAME'], unique: true },
  dateCreation: Date,
  avatarUrl: {
    type: String
  }
});

userSchema.plugin(uniqueValidator, { message: 'USERS_DUPLICATE_{PATH}' });

// eslint-disable-next-line
userSchema.methods.getPublicFields = function() {
  // eslint-disable-next-line
  const { password, __v, _id, ...publicUser } = this.toObject();
  return { id: _id, ...publicUser };
};

userSchema.post('save', async (error, doc, next) => {
  // console.log('MONGO ERROR:', error);
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new ApiError('USERS_ALREADY_EXIST'));
  }
  if (error.errors[Object.keys(error.errors)[0]]) {
    return next(new ApiError(error.errors[Object.keys(error.errors)[0]].message.toUpperCase()));
  }
  return next(error);
});

module.exports = mongoose.model('users', userSchema);
