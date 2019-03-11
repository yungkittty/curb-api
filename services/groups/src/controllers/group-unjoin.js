const unjoin = require('../services/unjoin');
const { ApiError } = require('../configurations/error');

async function groupUnjoin(req, res, next) {
  if (!req.params.groupId) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await unjoin({
      groupId: req.params.groupId,
      userId: req.authId
    });
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupUnjoin;
