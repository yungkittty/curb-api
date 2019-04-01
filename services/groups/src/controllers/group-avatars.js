const avatar = require('../services/avatar');
const { ApiError } = require('../configurations/error');

async function groupAvatars(req, res, next) {
  if (!req.body.avatarUrl || !req.params.groupId) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await avatar(req.params.groupId, req.body.avatarUrl);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupAvatars;
