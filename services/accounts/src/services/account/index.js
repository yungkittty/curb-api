const authenticate = require('./authenticate');
const logout = require('./logout');
const validatePassword = require('./validate-password');
const create = require('./create');
const remove = require('./remove');
const update = require('./update');
const read = require('./read');
const readByEmail = require('./read-by-email');
const generateTokenVerification = require('./generate-token-verification');
const updateCodePassword = require('./update-code-password');
const activate = require('./activate');
const resetPassword = require('./reset-password');
const isAccountValid = require('./is-account-valid');
const validateCodePassword = require('./validate-code-password');

module.exports = {
  authenticate,
  logout,
  validatePassword,
  create,
  remove,
  update,
  read,
  readByEmail,
  generateTokenVerification,
  updateCodePassword,
  activate,
  resetPassword,
  isAccountValid,
  validateCodePassword
};
