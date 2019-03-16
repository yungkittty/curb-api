const resetPassword = require('../services/account/reset-password');
const { ApiError } = require('../configurations/error');

async function accountActivate(req, res, next) {
  if (!req.params.id || !req.query.password || !req.query.code) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await resetPassword(req.params.id, req.query.code, req.query.password);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountActivate;
