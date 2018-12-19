const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs-extra');
const uuidv4 = require('uuid/v4');
const { check, validationResult } = require('express-validator/check');
const upload = require('./upload');

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send(`${process.env.SERVICE_NAME} endpoint`);
});

/**
 * Permet de servir statiquement les fichiers uploadés
 */

app.use('/uploads', express.static('uploads'));

/**
 * Validation de la requête avec express-validator
 */

app.use('/:groupId/:userId/:type', [
  check('userId').isUUID(),
  check('groupId').isUUID(),
  check('type').isIn(['img', 'vid', 'txt', 'loc']),
]);

app.use('/:groupId/:userId/:type', (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
});

/**
 * Une fois la requête validée, on initialise multer avec le body de la requête pour sauvegarder le fichier au bon endroit
 */

const multerUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      const path = `./uploads/${req.params.groupId}/`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      callback(null, `${uuidv4()}.${file.originalname.split('.')[1]}`);
    }
  })
});

app.post('/:groupId/:userId/:type', multerUpload.single('file'), upload);

module.exports = app;
