const avatar = require('../services/avatar');

async function userAvatars(req, res) {
  if (!req.body.avatarUrl || !req.params.userId) return res.status(400).end();
  try {
    await avatar(req.params.userId, req.body.avatarUrl);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = userAvatars;
