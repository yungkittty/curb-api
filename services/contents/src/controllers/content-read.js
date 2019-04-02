const Content = require('../models/content');

async function contentRead(req, res) {
  if (!req.params.contentId) {
    return res.status(400).end();
  }
  try {
    const content = await Content.findById(req.params.contentId);
    return res.status(200).json({
      ...content.getPublicFields()
    });
  } catch (error) {
    return res.status(400).end();
  }
}

module.exports = contentRead;
