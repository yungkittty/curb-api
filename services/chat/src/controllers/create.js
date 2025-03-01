const Axios = require('axios');
const { Chat } = require('../models/chat');

const create = async (req, res) => {
  const newChat = new Chat({
    userId: req.body.userId,
    data: req.body.data,
    group: req.params.groupId,
  });

  try {
    const postedChat = await newChat.save();
    await Axios.post(`http://curb-notif:4000/${req.params.groupId}/notif`, {
      notif: postedChat,
    });
  } catch (error) {
    return res.status(400).end();
  }

  return res.status(200).end();
};

module.exports = create;
