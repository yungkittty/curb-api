const axios = require('axios');
const list = require('../services/list');

async function groupList(req, res) {
  try {
    let authResponse;
    if (req.headers.authorization) {
      authResponse = await axios({
        method: 'post',
        headers: { Authorization: req.headers.authorization },
        url: 'http://curb-accounts:4000/validate',
        validateStatus: undefined
      });
      if (authResponse.status !== 200) {
        return res.status(authResponse.status).end();
      }
    }
    const authId =
      !authResponse || !authResponse.status ? undefined : authResponse.data.id;
    const response = await list({
      ...req.query,
      count: req.query.count ? parseInt(req.query.count, 10) : undefined,
      authId
    });
    if (!response) return res.status(400).end();
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    console.log('ERROR', error);
    return res.status(500).end();
  }
}

module.exports = groupList;
