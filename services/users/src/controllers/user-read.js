const read = require('../services/read');

async function userRead(req, res) {
  if (!req.params.id) {
    return res.status(400).end();
  }
  try {
    const user = await read(req.params.id, req.headers.authorization);
    if (!user) return res.status(400).end();
    return res.status(200).json({
      ...user
    });
  } catch (error) {
    return res.status(400).end();
  }
}

module.exports = userRead;
