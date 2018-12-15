const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect(
  'mongodb://db/Curb',
  { useNewUrlParser: true }
);

const userSchema = mongoose.Schema({
  login: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  refreshToken: String,
  dateCreation: Date
});

userSchema.pre('save', async function(next) {
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

userSchema.methods.getPublicFields = function() {
  const { password, __v, _id, ...publicUser } = this.toObject();
  return { id: _id, ...publicUser };
};

module.exports = mongoose.model('users', userSchema);
