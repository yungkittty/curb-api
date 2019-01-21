const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://db/Curb',
  { useNewUrlParser: true }
);

const userSchema = mongoose.Schema({
  _id: { type: mongoose.SchemaTypes.ObjectId, auto: false },
  name: { type: String, required: true, unique: true },
  dateCreation: Date,
  avatarUrl: {
    type: String,
    default: '/curb-content/default/avatars/users/medium.png'
  }
});

// eslint-disable-next-line
userSchema.methods.getPublicFields = function() {
  // eslint-disable-next-line
  const { password, __v, _id, ...publicUser } = this.toObject();
  return { id: _id, ...publicUser };
};

module.exports = mongoose.model('users', userSchema);
