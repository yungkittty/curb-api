const { Chat } = require('../models/chat');

const get = async (req, res) => {
  const chats = await Chat.find({ group: req.params.groupId });
  const data = [];

  for (let chat of chats) {
    const test = {};
    test.id = chat._id;
    test.userId = chat.userId;
    test.data = chat.data;
    test.createdAt = chat.createdAt;
    test.updatedAt = chat.updatedAt;
    data.push(test);
  }

  return res.status(200).json(data).end();
};

module.exports = get;
