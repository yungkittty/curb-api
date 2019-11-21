const { Chat } = require('../models/chat');

const create = async (req, res) => {
  const newChat = new Chat({
    from: req.body.from,
    message: req.body.message,
    group: req.params.groupId,
  });

  try {
    await newChat.save();
  } catch (error) {
    return res.status(400).end();
  }

  return res.status(200).end();
};

module.exports = create;
