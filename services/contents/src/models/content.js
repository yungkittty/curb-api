const mongoose = require('mongoose');

mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true });

const contentSchema = mongoose.Schema({
  creatorId: { type: String, required: true },
  groupId: { type: String, required: true },
  dateCreation: Date,
  type: { type: [String], required: true, enum: ['localisation', 'text', 'image', 'video'] },
  file: String
});

// eslint-disable-next-line
contentSchema.methods.getPublicFields = function() {
  // eslint-disable-next-line
  const { __v, _id, ...content } = this.toObject();
  return { id: _id, ...content };
};

module.exports = mongoose.model('contents', contentSchema);
