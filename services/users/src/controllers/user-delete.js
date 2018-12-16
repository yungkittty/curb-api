const remove = require('../services/remove');

async function userDelete(req, res) {
  if (!req.params.id) {
    return res.status(400).end();
  }
  try {
    const doService = await remove(req.params.id);
    if (!doService) return res.status(400).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(400).end();
  }
}

module.exports = userDelete;
