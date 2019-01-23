const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const uuidv4 = require('uuid/v4');
const axios = require('axios');
// const { check, validationResult } = require('express-validator/check');

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
      const path = `./uploads/${req.params.groupId}/images`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      callback(null, `${uuidv4()}.${file.originalname.split('.').reverse()[0]}`);
    }
  })
});

// images.use('/:groupId/:userId', [
//   check('userId').isUUID(),
//   check('groupId').isUUID(),
// ]);

// images.use('/:groupId/:userId', (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   return next();
// });

images.use('/:groupId/:userId', async (req, res, next) => {
  const response = await axios.get(`http://curb-groups:4000/permissions/${req.params.groupId}/${req.params.userId}`);
  if (response.status !== 200) return res.status(400).end();
  if (!response.data.write) return res.status(400).end();
  next();
});

images.post('/:groupId/:userId', upload.single('file'), (req, res) => (
  res.status(200).json({
    file: `uploads/${req.params.groupId}/images/${req.file.filename}`,
  })
));

module.exports = images;
