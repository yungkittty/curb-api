const update = require('../services/update');

async function groupUpdate(req, res) {
  if (!req.body) res.status(400).end();
  if (!req.params.id) return res.status(400).end();
  try {
    const done = await update(req.body, req.authId);
    if (!done) return res.status(400).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = groupUpdate;
