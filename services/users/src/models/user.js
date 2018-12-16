const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://db/Curb',
  { useNewUrlParser: true }
);

const userSchema = mongoose.Schema({
  _id: { type: mongoose.SchemaTypes.ObjectId, auto: false },
  name: { type: String, required: true },
  groups: [String],
  dateCreation: Date,
  avatarUrl: String
});

// eslint-disable-next-line
userSchema.methods.getPublicFields = function() {
  // eslint-disable-next-line
  const { password, __v, _id, ...publicUser } = this.toObject();
  return { id: _id, ...publicUser };
};

module.exports = mongoose.model('users', userSchema);
