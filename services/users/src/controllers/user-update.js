const update = require('../services/update');

async function userUpdate(req, res) {
  try {
    if (
      req.body.id ||
      req.body.__v ||
      req.body._id ||
      req.body.avatarUrl ||
      req.body.dateCreation
    ) {
      return res.status(400).end();
    }
    const doService = await update(req.params.id, req.body);
    return res.status(200).json({
      updatedUser: doService
    });
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = userUpdate;
