const read = require('../services/read');

async function userRead(req, res) {
  try {
    const doService = await read(req.query.id);
    return res.status(200).json({
      returnedUser: doService
    });
  } catch (error) {
    return res.status(400).json({});
  }
}

module.exports = userRead;
