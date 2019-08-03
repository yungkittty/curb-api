const multer = require('multer');
const fs = require('fs-extra');
const uuidv4 = require('uuid/v4');
const { ApiError } = require('../error');
const contentGeneratePath = require('../../services/content/content-generate-path');

function fileFilter(match) {
  return (req, file, callback) => {
    if (!file.originalname.toLowerCase().match(match)) {
      callback(new ApiError('CONTENTS_INVALID_TYPE'));
    }
    callback(null, true);
  };
}

function upload(type, filter) {
  const multerUpload = multer({
    fileFilter: filter,
    limits: {
      fieldSize: process.env.VIDEO_LIMIT_SIZE * 1024 * 1024
    },
    storage: multer.diskStorage({
      destination: async (req, file, callback) => {
        const path = await contentGeneratePath(req.params.postId, type);
        req.filePath = path;
        fs.mkdirsSync(path);
        callback(null, path);
      },
      filename: (req, file, callback) => {
        const fileName = `${uuidv4()}.${file.originalname.split('.').reverse()[0]}`;
        req.urlPath = `/contents${req.filePath.substring(1)}/${fileName}`;
        callback(null, fileName);
      }
    })
  });
  return multerUpload.single('file');
}

module.exports.upload = upload;
module.exports.fileFilter = fileFilter;
