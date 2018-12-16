const read = require('../services/read');

async function userRead(req, res) {
  if (!req.params.id) {
    return res.status(400).end();
  }
  try {
    const doService = await read(req.params.id);
    if (!doService) return res.status(400).end();
    return res.status(200).json({
      ...doService
    });
  } catch (error) {
    return res.status(400).end();
  }
}

module.exports = userRead;
