const permissions = require('../services/permissions');
const { ApiError } = require('../configurations/error');

async function groupPermissions(req, res, next) {
  if (!req.params.groupId || !req.params.userId) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    const rights = await permissions(req.params.groupId, req.params.userId);
    return res
      .status(200)
      .json(rights)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = groupPermissions;
