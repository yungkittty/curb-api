const express = require('express');
const axios = require('axios');
const create = require('../services/content-create');
const Content = require('../models/content');

const text = express();

text.use('/:groupId/:userId', async (req, res, next) => {
  if (!req.params.groupId || !req.params.userId || !req.body.data) return res.status(400).end();
  const response = await axios.get(
    `http://curb-groups:4000/permissions/${req.params.groupId}/${req.params.userId}`
  );
  if (response.status !== 200) return res.status(400).end();
  if (!response.data.write) return res.status(400).end();
  return next();
});

text.post('/:groupId/:userId', async (req, res) => {
  try {
    const check = await create('text', req.params.groupId, req.params.userId, req.body.data);
    if (!check) return res.status(400).end();
    const response = await axios({
      method: 'post',
      headers: { Authorization: req.headers.authorization },
      data: { type: 'text' },
      url: `http://curb-groups:4000/medias/${req.params.groupId}/${check.id}`,
      validateStatus: undefined
    });
    if (response.status !== 200) {
      await Content.findByIdAndRemove(check.id);
      return res.status(400).end();
    }
    return res.status(200).json({
      id: check.id,
      data: check.data
    });
  } catch (error) {
    return res.status(400).end();
  }
});

module.exports = text;
