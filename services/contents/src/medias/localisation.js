const express = require('express');
const axios = require('axios');

const localisation = express();

localisation.use('/:groupId/:userId', async (req, res, next) => {
  const response = await axios.get(`http://curb-groups:4000/permissions/${req.params.groupId}/${req.params.userId}`);
  if (response.status !== 200) return res.status(400).end();
  if (!response.data.write) return res.status(400).end();
  next();
});

localisation.get('/', (req, res) => (
  res.status(200).end()
));

module.exports = localisation;
