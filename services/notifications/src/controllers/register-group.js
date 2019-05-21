const { apiError } = require('../configurations/error');

// Will hit when a new group is created /=> create new room/sessions
async function registerGroup(req, res, next) {
  if (!req.body.groupId || req.body.userId) {
    return next(new apiError('BAD_PARAMETER'));
  }
  // WS stuff sessions stuff
}

module.exports = registerGroup;
