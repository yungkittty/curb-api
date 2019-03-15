const emailResetPassword = require('../services/email-reset-password');
const { ApiError } = require('../configurations/error');

async function reset(req, res, next) {
  if (!req.body.name || !req.body.email || !req.body.id) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await emailResetPassword(req.body);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = reset;
