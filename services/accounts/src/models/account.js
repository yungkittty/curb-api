const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');
const { ApiError } = require('../configurations/error');

mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true });

const accountSchema = mongoose.Schema({
  email: { type: String, unique: true, required: [true, 'MISSING_EMAIL'] },
  password: { type: String, required: [true, 'MISSING_PASSWORD'] },
  dateCreation: Date,
  active: { type: Boolean, default: false },
  codeVerification: { type: String },
  codePassword: { type: String }
});

accountSchema.plugin(uniqueValidator, { message: 'ACCOUNTS_DUPLICATE_{PATH}' });

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
    codePassword,
    codeVerification,
    ...publicAccount
  } = this.toObject();
  return { id: _id, ...publicAccount };
};

accountSchema.post('save', async (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new ApiError('ACCOUNTS_ALREADY_EXIST'));
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

module.exports = mongoose.model('account', accountSchema);
