const update = require('../services/account/update');
const getTokenFromHeader = require('../utils/request/get-token-from-header');

async function accountUpdate(req, res) {
  if (!req.body) res.status(400).end();
  if (!req.params.id) return res.status(400).end();
  if (!req.body.email && !req.body.password) res.status(400).end();
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return res.sendStatus(403).end();
    const account = await update(
      req.params.id,
      req.body.email,
      req.body.password
    );
    if (!account) return res.status(400).end();
    return res
      .status(200)
      .json({ ...account })
      .end();
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = accountUpdate;
