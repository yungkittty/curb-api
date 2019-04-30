const groupCreate = require('./group-create');
const groupRead = require('./group-read');
const groupUpdate = require('./group-update');
const groupDelete = require('./group-delete');
const groupList = require('./group-list');
const groupJoin = require('./group-join');
const groupTokenJoin = require('./group-token-join');
const groupPermissions = require('./group-permissions');
const groupAddPost = require('./group-add-post');
const groupDeletePost = require('./group-delete-post');
const groupInvite = require('./group-invite');
const groupAvatars = require('./group-avatars');
const groupUnjoin = require('./group-unjoin');
const groupTrending = require('./group-trending');

module.exports = {
  groupCreate,
  groupRead,
  groupUpdate,
  groupDelete,
  groupList,
  groupJoin,
  groupPermissions,
  groupAddPost,
  groupDeletePost,
  groupInvite,
  groupTokenJoin,
  groupAvatars,
  groupUnjoin,
  groupTrending
};
