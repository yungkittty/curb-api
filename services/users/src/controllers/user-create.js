const create = require('../services/create');

async function userCreate(req, res) {
  try {
    if (!req.body.email || !req.body.name || !req.body.password) {
      return res.status(400).end();
    }
    const doService = await create(req.body);
    if (doService === null) {
      return res.status(400).end();
    }
    return res.status(200).json({
      id: doService.id
    });
  } catch (error) {
    return res.status(400).end();
  }
}

module.exports = userCreate;
