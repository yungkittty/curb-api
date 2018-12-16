const remove = require('../services/account/remove');
const getTokenFromHeader = require('../utils/request/get-token-from-header');

async function accountDelete(req, res) {
  if (!req.params.id) return res.status(400).end();
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return res.sendStatus(403).end();
    const account = await remove(req.params.id, token);
    if (!account) return res.status(400).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = accountDelete;
