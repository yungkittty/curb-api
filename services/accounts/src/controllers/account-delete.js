const remove = require('../services/account/remove');
const { ApiError } = require('../configurations/error');

async function accountDelete(req, res, next) {
  if (!req.params.id) return next(new ApiError('BAD_PARAMETER'));
  try {
    await remove(req.params.id, req.cookies.token);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountDelete;
