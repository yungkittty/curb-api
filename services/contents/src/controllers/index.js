const contentRead = require('./content-read');
const contentUpdate = require('./content-update');
const contentDelete = require('./content-delete');
const images = require('./images');
const videos = require('./videos');
const locations = require('./locations');
const texts = require('./texts');
const avatars = require('./avatars');

module.exports = {
  contentRead,
  contentUpdate,
  contentDelete,
  images,
  videos,
  locations,
  texts,
  avatars
};
