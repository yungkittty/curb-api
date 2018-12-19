const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const uuidv4 = require('uuid/v4');
const { check, validationResult } = require('express-validator/check');

const videos = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      const path = `./uploads/${req.params.groupId}/videos`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      callback(null, `${uuidv4()}.${file.originalname.split('.')[1]}`);
    }
  })
});

videos.use('/:groupId/:userId', [
  check('userId').isUUID(),
  check('groupId').isUUID(),
]);

videos.use('/:groupId/:userId', (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
});

videos.post('/:groupId/:userId', upload.single('file'), (req, res) => (
  res.status(200).json({
    file: `uploads/${req.params.groupId}/videos/${req.file.filename}`,
  })
));

module.exports = videos;
