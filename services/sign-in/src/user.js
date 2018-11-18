// /!\ This file will be removed for the real user model /!\

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect(
  'mongodb://localhost/test',
  { useNewUrlParser: true }
);

const Schema = mongoose.Schema;

const UserTest = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  refreshToken: { type: String }
});

const userModel = mongoose.model('usertests', UserTest);

mongoose.set('debug', true);

// UserTest.pre("save", async function(next) {
//
//   if (isModified("password") || isNew) {
//     const salt = await bcrypt.genSalt(10);
//     if (!salt) throw new Error();
//     const hash = await bcrypt.hash(this.password, salt);
//     if (!hash) throw new Error();
//     this.password = hash;
//   } else {
//     return next();
//   }
// });

// UserTest.methods.findUser = async function(plainlogin, plainPassword) {
//   const hashedPassword = _crypt(plainPassword);

//   userModel.find(
//     { login: plainlogin, password: hashedPassword },
//     async function(err, docs) {}
//   );
// };

async function _crypt(password) {
  const salt = await bcrypt.genSalt(10);
  if (!salt) return null;
  const hash = await bcrypt.hash(password, salt);
  if (!hash) return null;
  console.log(hash);
  return hash;
}

userModel.find({}, function(err, docs) {
  console.log({ err, docs });
});

// const hash = _crypt('cry').then(hash => {
//   const toto = new userModel({
//     login: 'antoine',
//     password: hash,
//     refreshToken: ''
//   });

//   toto.save(err => {
//     userModel.find({}, function(err, docs) {
//       console.log({ err, docs });
//     });
//   });
// });
// userModel.find({}, function(err, docs) {
//   console.log({ err, docs });
// });

// userModel.deleteMany({}, function(err, docs) {
//   if (err) console.warn(err);
// });

module.exports = mongoose.model('usertests', UserTest);
