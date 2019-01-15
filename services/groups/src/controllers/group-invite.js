const invite = require('../services/invite');

async function groupInvite(req, res) {
  if (!req.params.groupId || !req.params.guestId) {
    return res.status(400).end();
  }
  try {
    const response = await invite(
      req.params.groupId,
      req.authId,
      req.params.guestId
    );
    if (!response) return res.status(200).end();
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = groupInvite;
