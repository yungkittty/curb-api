const update = require('../services/update');
const { ApiError } = require('../configurations/error');

async function groupUpdate(req, res, next) {
  if (!req.body) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  if (!req.params.id) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await update(req.body, req.authId);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupUpdate;
