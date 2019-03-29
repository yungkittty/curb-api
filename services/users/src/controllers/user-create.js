const create = require('../services/create');
const { ApiError } = require('../configurations/error');

async function userCreate(req, res, next) {
  try {
    if (!req.body.id || !req.body.name) {
      return next(new ApiError('BAD_PARAMETER'));
    }
    const doService = await create(req.body);
    return res
      .status(200)
      .json({
        id: doService.id
      })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = userCreate;
