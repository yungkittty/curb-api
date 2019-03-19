const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const uuidv4 = require('uuid/v4');
const axios = require('axios');
const create = require('../services/content-create');

const images = express();

const upload = multer({
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      callback(new Error('Only image files are allowed'));
    }
    callback(null, true);
  },
  limits: {
    fieldSize: process.env.IMAGE_LIMIT_SIZE * 1024 * 1024
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      const path = `./uploads/groups/${req.params.groupId}/images/${req.params.userId}`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      callback(null, `${uuidv4()}.${file.originalname.split('.').reverse()[0]}`);
    }
  })
});

images.use('/:groupId/:userId', async (req, res, next) => {
  if (!req.params.groupId || !req.params.userId) return res.status(400).end();
  try {
    const response = await axios.get(`http://curb-groups:4000/permissions/${req.params.groupId}/${req.params.userId}`);
    if (response.status !== 200) return res.status(400).end();
    if (!response.data.write) return res.status(400).end();
    return next();
  } catch (error) {
    return res.status(400).end();
  }
});

images.post('/:groupId/:userId', upload.single('file'), async (req, res) => {
  try {
    const check = await create('image', req);
    if (!check) return res.status(400).end();
    const response = await axios({
      method: 'post',
      headers: { Authorization: req.headers.authorization },
      url: `http://curb-groups:4000/medias/${req.params.groupId}/${check.id}`,
      validateStatus: undefined
    });
    if (response.status !== 200) return res.status(400).end();
    return res.status(200).json({
      id: check.id,
      file: `/contents/uploads/groups/${req.params.groupId}/images/${req.params.userId}/${req.file.filename}`
    });
  } catch (error) {
    return res.status(400).end();
  }
});

module.exports = images;
