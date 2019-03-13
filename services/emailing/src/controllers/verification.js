const emailVerification = require('../services/email-verification');

async function verification(req, res, next) {
  if (!req.body.name || !req.body.email || !req.body.id) {
    return next(new Error('BAD_PARAMETER'));
  }
  try {
    const code = await emailVerification(req.body);
    return res
      .status(200)
      .json({ code })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = verification;
