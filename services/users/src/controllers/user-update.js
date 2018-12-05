const update = require('../services/update');

async function userUpdate(req, res) {
  try {
    const doService = await update(req.body.id, req.body.newPassword);
    return res.status(200).json({
      updatedUser: doService
    });
  } catch (error) {
    return res.status(400).end();
  }
}

module.exports = userUpdate;
