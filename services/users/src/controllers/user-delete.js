const remove = require('../services/remove');
const { ApiError } = require('../configurations/error');

async function userDelete(req, res, next) {
  if (!req.params.id) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await remove(req.params.id);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = userDelete;
