const axios = require('axios');
const create = require('../services/create');

/**
 *
 * @param {Object} req /
 * @param {Object} res /
 *
 * Precondition:
 * - The user need to be authenticated.
 *
 * - creatordId will be filled by the userId provided by sign-in 'validate'.
 * - creatorId will be also put in the group's users field.
 *
 * http header:
 *  - Authorization: 'Bearer ' + token
 * parameter:
 *  {
 *    name: {String},
 *    status: {String}
 *  }
 *
 * success: 200.
 * {
 *   id: {Uuid}
 * }
 *
 * failure:
 *
 *  - 400 in case of bad request.
 *  - 403 in case of authentification failure.
 *  - 500 in case of failed database operation.
 */
async function groupCreate(req, res) {
  console.log('creation');
  if (!req.body) return res.status(400).end();
  if (!req.headers.authorization) return res.status(400).end();
  const { name, status } = req.body;
  if (!name || !status) return res.status(400).end();
  try {
    const response = await axios({
      method: 'post',
      headers: { Authorization: req.headers.authorization },
      url: 'http://curb-accounts:4000/validate',
      validateStatus: undefined
    });
    console.log(response.status);
    if (response.status !== 200) return res.status(response.status).end();
    console.log('valite response', response.data);
    const groupId = await create({ creatorId: response.data.id, name, status });
    if (!groupId) return res.status(500).end();
    return res.status(200).json(groupId);
  } catch (error) {
    console.log('ERROR', error);
    return res.status(500).end();
  }
}

module.exports = groupCreate;
