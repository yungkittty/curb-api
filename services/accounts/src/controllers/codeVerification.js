// TODO

async function codeVerification(req, res, next) {
  if (!req.body.id || !req.body.code) {
    return next(new Error('BAD_PARAMETER'));
  }
  try {
    res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = codeVerification;
