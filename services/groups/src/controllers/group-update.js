const axios = require('axios');
const update = require('../services/update');

async function groupUpdate(req, res) {
  if (!req.body) res.status(400).end();
  if (!req.params.id) return res.status(400).end();
  if (!req.body.status && !req.body.name) return res.status(400).end();
  if (!req.headers.authorization) return res.status(400).end();
  try {
    const response = await axios({
      method: 'post',
      headers: { Authorization: req.headers.authorization },
      url: 'http://curb-accounts:4000/validate',
      validateStatus: undefined
    });
    if (response.status !== 200) return res.status(response.status).end();
    const done = await update(req.body, response.data.id);
    if (!done) return res.status(400).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = groupUpdate;
