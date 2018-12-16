const mongoose = require('mongoose');
require('mongoose-type-email');
const bcrypt = require('bcrypt');

mongoose.connect(
  'mongodb://localhost/Curb',
  { useNewUrlParser: true }
);

const userSchema = mongoose.Schema({
  email: { type: mongoose.SchemaTypes.Email, unique: true, required: true },
  name: { type: String, required: true },
  groups: [String],
  password: { type: String, required: true },
  refreshToken: String,
  dateCreation: Date,
  avatarUrl: String
});

// eslint-disable-next-line
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

// eslint-disable-next-line
userSchema.methods.getPublicFields = function() {
  // eslint-disable-next-line
  const { password, __v, _id, ...publicUser } = this.toObject();
  return { id: _id, ...publicUser };
};

module.exports = mongoose.model('users', userSchema);
