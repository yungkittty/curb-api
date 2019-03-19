const avatar = require('../services/avatar');

async function userAvatar(req, res) {
  if (!req.body.avatarUrl || !req.params.userId) return res.status(400).end();
  try {
    const response = await avatar(req.params.userId, req.body.avatarUrl);
    if (!response) return res.status(400).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = userAvatar;
