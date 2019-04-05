const resetPassword = require('../services/account/reset-password');
const { ApiError } = require('../configurations/error');

async function accountActivate(req, res, next) {
  if (!req.body.email || !req.body.password || !req.body.code) {
    return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  }
  try {
    await resetPassword(req.body.email, req.body.code, req.body.password);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountActivate;
