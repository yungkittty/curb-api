const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Schema defines how the user data will be stored in MongoDB
mongoose.connect(process.env.MONGO_URI, (err) => {
  console.log(!err ? `connected to ${process.env.MONGO_URI}` : err);
});

const UserSchema = new mongoose.Schema({
  mail: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  account: {
    type: String,
    lowercase: true,
    unique: true,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    reauired: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
});

// Saves the user's password hashed
UserSchema.pre('save', (next) => {
  const user = this;

  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) return next(error);
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        return next();
      });
      return null;
    });
  }
  return next();
});

// Create method to compare password input to password saved in database
UserSchema.methods.comparePassword = (pw, pass, cb) => {
  bcrypt.compare(pw, pass, (err, isMatch) => {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

module.exports = mongoose.model('Users', UserSchema);
