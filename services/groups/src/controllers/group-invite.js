const invite = require('../services/invite');
const { ApiError } = require('../configurations/error');

async function groupInvite(req, res, next) {
  if (!req.params.groupId) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    const response = await invite(req.params.groupId, req.authId);
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupInvite;
