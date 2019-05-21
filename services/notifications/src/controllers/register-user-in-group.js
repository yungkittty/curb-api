const { apiError } = require('../configurations/error');

// will hit when a new user join a group
async function registerUserInGroup(req, res, next) {
  if (!req.body.groupId || req.body.userId) {
    return next(new apiError('BAD_PARAMETER'));
  }
  // WS stuff
}

module.exports = registerUserInGroup;
