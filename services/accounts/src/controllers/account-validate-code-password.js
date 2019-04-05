const validateCodePassword = require('../services/account/validate-code-password');
const { ApiError } = require('../configurations/error');

async function accountValidateCodePassword(req, res, next) {
  if (!req.body.email || !req.body.code) {
    return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  }
  try {
    await validateCodePassword(req.body.code, req.body.email);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountValidateCodePassword;
