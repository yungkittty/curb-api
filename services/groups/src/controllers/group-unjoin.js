const unjoin = require('../services/unjoin');

async function groupUnjoin(req, res) {
  if (!req.params.groupId) return res.status(400).end();
  try {
    const done = await unjoin({
      groupId: req.params.groupId,
      userId: req.authId
    });
    if (!done) return res.status(500).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = groupUnjoin;
