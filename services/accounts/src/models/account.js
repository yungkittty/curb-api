const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { ApiError } = require('../configurations/error');

mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true });

const accountSchema = mongoose.Schema({
  email: { type: String, unique: true, required: [true, 'MISSING_EMAIL'] },
  password: { type: String, required: [true, 'MISSING_PASSWORD'] },
  refreshToken: String,
  dateCreation: Date,
  avatarUrl: String,
  active: { type: Boolean, default: false },
  codeVerification: { type: String },
  codePassword: { type: String }
});

// eslint-disable-next-line
accountSchema.pre('save', async function(next) {
  if (this.isModified('password') || this.isNew) {
    if (this.isNew) this.dateCreation = new Date();
    const salt = await bcrypt.genSalt(10);
    if (!salt) throw new Error();
    const hash = await bcrypt.hash(this.password, salt);
    if (!hash) throw new Error();
    this.password = hash;
  } else {
    return next();
  }
});

// eslint-disable-next-line
accountSchema.methods.getPublicFields = function() {
  const {
    password,
    __v,
    _id,
    refreshToken,
    ...publicAccount
  } = this.toObject();
  return { id: _id, ...publicAccount };
};

accountSchema.post('save', async (error, doc, next) => {
  console.log('MONGO ERROR:', error);
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new ApiError('ACCOUNT_ALREADY_EXIST'));
  }
  if (error.errors[Object.keys(error.errors)[0]]) {
    return next(
      new ApiError(error.errors[Object.keys(error.errors)[0]].message)
    );
  }
  return next(error);
});

module.exports = mongoose.model('account', accountSchema);
