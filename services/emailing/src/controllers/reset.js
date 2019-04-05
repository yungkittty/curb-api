const emailResetPassword = require('../services/email-reset-password');
const { ApiError } = require('../configurations/error');

async function reset(req, res, next) {
  if (!req.body.email) {
    return next(new ApiError('EMAILING_BAD_PARAMETER'));
  }
  try {
    await emailResetPassword(req.body.email);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = reset;
