const { Chat } = require('../models/chat');

const get = async (req, res) => {
  const chat = await Chat.find({ group: req.params.groupId });

  return res.status(200).json(chat).end();
};

module.exports = get;
