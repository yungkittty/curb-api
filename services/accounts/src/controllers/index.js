const signIn = require('./sign-in');
const signOut = require('./sign-out');
const signUp = require('./sign-up');
const validate = require('./validate');
const accountRead = require('./account-read');
const accountDelete = require('./account-delete');
const accountUpdate = require('./account-update');
const accountCodeVerification = require('./account-code-verification');
const accountCodePassword = require('./account-code-password');
const accountActivate = require('./account-activate');
const accountResetPassword = require('./account-reset-password');
const accountReadByEmail = require('./account-read-by-email');
const accountValideCodePassword = require('./account-validate-code-password');
const accountMe = require('./account-me');

module.exports = {
  signIn,
  signOut,
  signUp,
  validate,
  accountRead,
  accountDelete,
  accountUpdate,
  accountCodeVerification,
  accountCodePassword,
  accountActivate,
  accountResetPassword,
  accountReadByEmail,
  accountValideCodePassword,
  accountMe
};
