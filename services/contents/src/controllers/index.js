const images = require('./images');
const videos = require('./videos');
const locations = require('./locations');
const texts = require('./texts');
const avatars = require('./avatars');
const events = require('./events');

const post = require('./post');
const content = require('./content');

module.exports = {
  images,
  videos,
  locations,
  texts,
  avatars,
  events,
  ...post,
  ...content
};
