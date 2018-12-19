const upload = (req, res) => (
  res.status(200).json({
    file: req.file.filename,
  })
);

module.exports = upload;
