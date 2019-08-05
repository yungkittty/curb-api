const postCreate = require('./post-create');
const postDelete = require('./post-delete');
const postRead = require('./post-read');
const postUpdate = require('./post-update');
const postPin = require('./post-pin');
const postReaction = require('./post-reaction');
const postList = require('./post-list');

module.exports = {
  postCreate,
  postDelete,
  postRead,
  postUpdate,
  postPin,
  postReaction,
  postList
};
