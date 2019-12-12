const express = require('express');
const sharp = require('sharp');
const Path = require('path');
const sizeOf = require('image-size');
const fs = require('fs');
const gifResize = require('@gumlet/gif-resize');
const { upload, fileFilter } = require('../configurations/multer');
const addContent = require('../services/content/content-add');
const { ApiError } = require('../configurations/error');
const middlewares = require('../middleswares');

const images = express();

/**
 *
 * @api {POST} /images/:postId/ CONTENT UPLOAD IMAGE
 * @apiName CONTENTS2
 * @apiGroup CONTENTS
 * @apiVersion  0.2.0
 *
 *
 * @apiParam  {String} postId //
 * @apiParam  {String} file file path
 *
 * @apiParamExample  {form-data} Request-Example:
 * {
 *     file: '${imagePath}',
 * }
 *
 * @apiSuccess (200) {String} id contentId
 * @apiSuccess (200) {String} data urlPath
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     id: 'uuid',
 *     data: '/contents/uploads/groups/${groupId}/images/${postId}/${filename}'
 * }
 *
 *
 * @apiError CONTENTS_BAD_PARAMETER 400
 * @apiError CONTENTS_FORBIDDEN_WRITE 403
 * @apiError CONTENTS_INEXISTENT_CONTENT 404
 * @apiError UNDEFINED 500
 *
 */

images.post(
  '/:postId',
  middlewares.permissions,
  middlewares.mediaType,
  upload('images', fileFilter(/\.(jpg|jpeg|png|gif)$/)),
  async (req, res, next) => {
    try {
      if (!req.permissions.write) {
        return next(new ApiError('CONTENTS_FORBIDDEN_WRITE'));
      }

      const content = await addContent(
        'image',
        req.params.postId,
        req.authId,
        req.urlPath
      );
      if (!content) return next(new ApiError('CONTENTS_INEXISTENT_CONTENT'));
      const ext = Path.extname(req.file.originalname);
      const nameSplit = req.file.filename.split('.');
      const convertRatio = 1.77778;
      const dimensions = sizeOf(req.file.path);
      const convertedHeight = Math.round(dimensions.width / convertRatio);
      const landscapeFile = `${req.filePath}/${nameSplit[0]}_landscape${ext}`;
      if (ext === '.gif') {
        const buffer = fs.readFileSync(req.file.path);
        const resizedBuffer = await gifResize({
          width: dimensions.width,
          height: convertedHeight
        })(buffer);
        fs.writeFileSync(landscapeFile, resizedBuffer);
      } else {
        await sharp(req.file.path)
          .resize({ width: dimensions.width, height: convertedHeight })
          .toFile(landscapeFile);
      }
      return res.status(200).json({
        id: content.id,
        data: content.data
      });
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = images;
