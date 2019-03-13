const emailResetPassword = require('../services/email-reset-password');

async function reset(req, res, next) {
  if (!req.body.name || !req.body.email || !req.body.id) {
    return next(new Error('BAD_PARAMETER'));
  }
  try {
    const code = await emailResetPassword(req.body);
    return res
      .status(200)
      .json({ code })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = reset;
