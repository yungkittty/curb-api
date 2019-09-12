const error = require('./error');
const authentication = require('./authentication');
const permissions = require('./permissions');
const optionalAuthId = require('./optional-auth-id');

module.exports = {
  authentication,
  error,
  permissions,
  optionalAuthId
};
