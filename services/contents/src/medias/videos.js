const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const uuidv4 = require('uuid/v4');
const axios = require('axios');
const create = require('../services/content-create');
const Content = require('../models/content');

const videos = express();

const upload = multer({
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(mp4|MP4|avi|AVI)$/)) {
      callback(new Error('Only video files are allowed'));
    }
    callback(null, true);
  },
  limits: {
    fieldSize: process.env.VIDEO_LIMIT_SIZE * 1024 * 1024
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      const path = `./uploads/groups/${req.params.groupId}/videos/${req.params.userId}`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      callback(null, `${uuidv4()}.${file.originalname.split('.').reverse()[0]}`);
    }
  })
});

videos.use('/:groupId/:userId', async (req, res, next) => {
  if (!req.params.groupId || !req.params.userId) return res.status(400).end();
  try {
    const response = await axios.get(
      `http://curb-groups:4000/permissions/${req.params.groupId}/${req.params.userId}`
    );
    if (response.status !== 200) return res.status(400).end();
    if (!response.data.write) return res.status(400).end();
    return next();
  } catch (error) {
    return res.status(400).end();
  }
});

videos.post('/:groupId/:userId', upload.single('file'), async (req, res) => {
  try {
    const check = await create(
      'video',
      req.params.groupId,
      req.params.userId,
      `/contents/uploads/groups/${req.params.groupId}/videos/${req.params.userId}/${
        req.file.filename
      }`
    );
    if (!check) return res.status(400).end();
    const response = await axios({
      method: 'post',
      headers: { Authorization: req.headers.authorization },
      data: { type: 'video' },
      url: `http://curb-groups:4000/medias/${req.params.groupId}/${check.id}`,
      validateStatus: undefined
    });
    if (response.status !== 200) {
      await Content.findByIdAndRemove(check.id);
      return res.status(400).end();
    }
    return res.status(200).json({
      id: check.id,
      file: check.data
    });
  } catch (error) {
    return res.status(400).end();
  }
});

module.exports = videos;
