const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/Curb',
  { useNewUrlParser: true }
);

const userSchema = mongoose.Schema({
  login: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  refreshToken: String,
  dateCreation: Date
});

module.exports = mongoose.model('user', userSchema);
