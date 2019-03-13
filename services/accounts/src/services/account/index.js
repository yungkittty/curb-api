const authenticate = require('./authenticate');
const logout = require('./logout');
const validatePassword = require('./validate-password');
const create = require('./create');
const remove = require('./remove');
const update = require('./update');
const updateCode = require('./update-code');
const activate = require('./activate');

module.exports = {
  authenticate,
  logout,
  validatePassword,
  create,
  remove,
  update,
  updateCode,
  activate
};
