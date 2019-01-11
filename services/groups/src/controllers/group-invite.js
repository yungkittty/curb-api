const axios = require('axios');
const invite = require('../services/invite');

async function groupInvite(req, res) {
  if (!req.params.groupId || !req.params.issuerId || !req.params.guestId) {
    return res.status(400).end();
  }
  if (!req.headers.authorization) return res.status(400).end();
  try {
    const authResponse = await axios({
      method: 'post',
      headers: { Authorization: req.headers.authorization },
      url: 'http://curb-accounts:4000/validate',
      validateStatus: undefined
    });
    if (authResponse.status !== 200) {
      return res.status(authResponse.status).end();
    }
    const response = await invite(
      req.params.groupId,
      req.params.issuerId,
      req.params.guestId
    );
    console.log('TOKEN=>', response);
    if (!response) return res.status(200).end();
    console.log('DONE RESPONSE=>', response);
    return res
      .status(200)
      .json(response)
      .end();
  } catch (error) {
    console.log('ERROR=>', error);
    return res.status(500).end();
  }
}

module.exports = groupInvite;
