const create = require('../services/create');

async function userCreate(req, res, next) {
  try {
    if (!req.body.id || !req.body.name) {
      return next('BAD_PARAMETER');
    }
    const doService = await create(req.body);
    return res.status(200).json({
      id: doService.id
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = userCreate;
