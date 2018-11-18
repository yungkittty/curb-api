const remove = require('../services/remove');

async function userDelete(req, res) {
  try {
    const doService = await remove(req.body.id);
    return res.status(200).json({
      removedUser: doService
    });
  } catch (error) {
    return res.status(400).json({});
  }
}

module.exports = userDelete;
