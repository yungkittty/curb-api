const updateCodeVerification = require('../services/account/update-code-verification');

async function accountCode(req, res, next) {
  if (!req.params.id || !req.body.code) {
    return next(new Error('BAD_PARAMETER'));
  }
  try {
    await updateCodeVerification(req.params.id, req.body.code);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountCode;
