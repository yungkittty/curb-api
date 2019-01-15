const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://db/Curb',
  { useNewUrlParser: true }
);

const groupSchema = mongoose.Schema({
  creatorId: { type: String, required: true },
  name: { type: String, unique: true, required: true },
  status: { type: String, required: true, enum: ['public', 'private'] },
  avatarUrl: String,
  dateCreation: Date,
  users: { type: [String] },
  medias: { type: [String] },
  mediaTypes: {
    type: [String],
    required: true,
    enum: ['localisation', 'text', 'image', 'video']
  },
  theme: { type: String }
});

// eslint-disable-next-line
groupSchema.methods.getPublicFields = function() {
  const { __v, _id, ...publicGroup } = this.toObject();
  return { id: _id, ...publicGroup };
};

module.exports = mongoose.model('groups', groupSchema);
