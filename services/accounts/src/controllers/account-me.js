const me = require('../services/account/me');

async function accountMe(req, res, next) {
  try {
    const response = await me(req.authId);
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountMe;
