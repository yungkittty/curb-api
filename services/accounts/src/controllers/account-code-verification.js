const updateCodeVerification = require('../services/account/update-code-verification');
const { ApiError } = require('../configurations/error');

async function accountCode(req, res, next) {
  if (!req.params.id || !req.body.code) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await updateCodeVerification(req.params.id, req.body.code);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountCode;
