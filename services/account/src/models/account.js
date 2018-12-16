const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect(
  // TODO 'mongodb://db/Curb'
  'mongodb://localhost/Curb',
  { useNewUrlParser: true }
);

const accountSchema = mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  refreshToken: String,
  dateCreation: Date
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

module.exports = mongoose.model('account', accountSchema);
