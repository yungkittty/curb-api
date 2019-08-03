const { OtherServiceError, ApiError } = require('../configurations/error');
const groupPermissions = require('../utils/group-permissions');
const { Post } = require('../models/post');

async function permissions(req, res, next) {
  try {
    if (!req.authId) {
      return next(new ApiError('CONTENTS_FORBIDEN_OPERATION'));
    }
    if (req.params.groupId) {
      const response = await groupPermissions(req.params.groupId, req.authId);
      if (response.status !== 200) {
        throw new OtherServiceError(response.data.service, response.data.code, response.status);
      }
      req.permissions = response.data;
      return next();
    }
    if (req.params.postId) {
      const { groupId = null } = await Post.findOne({ _id: req.params.postId });
      console.log('PERMISSION=>groupId :', groupId);
      if (groupId === null) {
        return next(new ApiError('CONTENTS_FORBIDEN_OPERATION'));
      }
      const response = await groupPermissions(groupId, req.authId);
      if (response.status !== 200) {
        throw new OtherServiceError(response.data.service, response.data.code, response.status);
      }
      req.permissions = response.data;
      return next();
    }
    return next(new ApiError('CONTENTS_FORBIDEN_OPERATION'));
  } catch (error) {
    return next(error);
  }
}

module.exports = permissions;
