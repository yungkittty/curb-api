const { Content } = require('../../models/content');

async function contentUpdate(req, res) {
  // if (!req.params.contentId || req.body.dateCreation
  //   || req.body.id) res.status(400).end();
  // try {
  //   const content = await Content.findById(req.params.contentId);
  //   const operationFields = Object.keys(req.body);
  //   operationFields.map((attribute) => {
  //     content[attribute] = req.body[attribute];
  //   });
  //   await content.save();
  //   return res.status(200).json({ ...content.getPublicFields() });
  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).end();
  // }
}

module.exports = contentUpdate;
