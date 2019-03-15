const resetPassword = require('../services/account/reset-password');

async function accountActivate(req, res, next) {
  if (!req.params.id || !req.query.password || !req.query.code) {
    return next(new Error('BAD_PARAMETER'));
  }
  try {
    await resetPassword(req.params.id, req.query.code, req.query.password);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountActivate;
