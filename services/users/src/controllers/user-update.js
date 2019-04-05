const update = require('../services/update');
const { ApiError } = require('../configurations/error');

async function userUpdate(req, res, next) {
  try {
    if (
      req.body.id ||
      req.body.__v ||
      req.body._id ||
      req.body.avatarUrl ||
      req.body.dateCreation
    ) {
      return next(new ApiError('USERS_BAD_PARAMETER'));
    }
    const doService = await update(req.params.id, req.body);
    return res
      .status(200)
      .json({
        ...doService
      })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = userUpdate;
