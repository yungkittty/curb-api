const update = require('../services/update');

async function userUpdate(req, res, next) {
  try {
    if (
      req.body.id ||
      req.body.__v ||
      req.body._id ||
      req.body.avatarUrl ||
      req.body.dateCreation
    ) {
      return next('BAD_PARAMETER');
    }
    const doService = await update(req.params.id, req.body);
    return res.status(200).json({
      ...doService
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = userUpdate;
