const images = require('./images');
const videos = require('./videos');
const locations = require('./locations');
const texts = require('./texts');
const avatars = require('./avatars');

const post = require('./post');
const content = require('./content');

module.exports = {
  images,
  videos,
  locations,
  texts,
  avatars,
  ...post,
  ...content
};
