const { OtherServiceError, ApiError } = require('../configurations/error');
const groupPermissions = require('../utils/group-permissions');

async function permissions(req, res, next) {
  try {
    if (!req.params.groupId || !req.authId) {
      return next(new ApiError('CONTENTS_FORBIDEN_OPERATION'));
    }
    const response = await groupPermissions(req.params.groupId, req.authId);
    if (response.status !== 200) {
      throw new OtherServiceError(response.data.service, response.data.code, response.status);
    }
    req.permissions = response.data;
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = permissions;
