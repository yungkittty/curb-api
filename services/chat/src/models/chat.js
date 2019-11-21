const mongoose = require('mongoose');

mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true });

const chatSchema = mongoose.Schema(
  {
    from: String,
    message: String,
    group: String,
  },
  { timestamps: true }
);

module.exports.Chat = mongoose.model('chat', chatSchema);
module.exports.chatSchema = chatSchema;
