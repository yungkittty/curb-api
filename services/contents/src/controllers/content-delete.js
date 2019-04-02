const axios = require('axios');

const Content = require('../models/content');

async function contentDelete(req, res) {
  if (!req.params.contentId || !req.headers.authorization) return res.status(400).end();
  try {
    const response = await axios({
      method: 'post',
      headers: { Authorization: req.headers.authorization },
      url: 'http://curb-accounts:4000/validate',
      validateStatus: undefined
    });
    if (response.status !== 200) {
      const groupOwner = await axios({
        method: 'get',
        headers: { Authorization: req.headers.authorization },
        url: `http://curb-groups:4000/permissions/${req.params.groupId}/${
          response.data.id
        }`,
        validateStatus: undefined
      });
      if (groupOwner.status !== 200 || !groupOwner.data.creator) {
        return res.status(400).end();
      }
    }
    const remove = await Content.findByIdAndRemove(req.params.contentId);
    if (!remove) return res.status(400).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = contentDelete;
