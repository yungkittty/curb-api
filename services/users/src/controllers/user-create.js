const create = require('../services/create');

async function userCreate(req, res) {
  try {
    const doService = await create(req.body);
    return res.status(200).json({
      createdUser: doService
    });
  } catch (error) {
    return res.status(400).json({});
  }
}

module.exports = userCreate;
