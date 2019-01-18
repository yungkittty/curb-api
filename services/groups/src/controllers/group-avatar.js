const avatar = require('../services/avatar');

async function groupAvatar(req, res) {
  if (!req.body.avatarUrl || !req.params.groupId) return res.status(400).end();
  try {
    const response = avatar(req.params.groupId, req.body.avatarUrl);
    if (!response) return null;
    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = groupAvatar;
