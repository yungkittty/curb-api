const create = require('./create');
const read = require('./read');
const update = require('./update');
const remove = require('./remove');
const join = require('./join');
const list = require('./list');
const permissions = require('./permissions');
const addPost = require('./add-post');
const deletePost = require('./delete-post');
const invite = require('./invite');
const avatar = require('./avatar');
const unjoin = require('./unjoin');
const trending = require('./trending');
const ranking = require('./ranking');

module.exports = {
  create,
  read,
  update,
  remove,
  join,
  list,
  permissions,
  addPost,
  deletePost,
  invite,
  avatar,
  unjoin,
  trending,
  ranking
};
