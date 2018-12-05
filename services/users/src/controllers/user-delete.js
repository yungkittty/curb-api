const remove = require('../services/remove');

async function userDelete(req, res) {
  try {
    const doService = await remove(req.body.id);
    if (!doService) return res.status(400).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(400).end();
  }
}

module.exports = userDelete;
