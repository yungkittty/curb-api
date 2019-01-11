const post = require('../services/post');

async function groupPost(req, res) {
  if (!req.params.groupId || !req.params.mediaId) return res.status(400).end();
  try {
    const done = await post(req.params.groupId, req.params.mediaId);
    if (!done) res.status(400).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = groupPost;
