const activate = require('../services/account/activate');
const { ApiError } = require('../configurations/error');

async function accountActivate(req, res, next) {
  if (!req.params.id || !req.query.code) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await activate(req.params.id, req.query.code);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountActivate;
