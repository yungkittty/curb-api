const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    login: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    refreshToken: String,
    dateCreation: Date
});

mongoose.set('debug', true)

module.exports = mongoose.model('user', userSchema);