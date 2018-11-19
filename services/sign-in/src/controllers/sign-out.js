const authService = require('../services/authentication');

async function signOut(req, res) {
  const { token } = req.body;
  if (!token) return res.status(400).end();
  try {
    const response = await authService.logout(token);
    if (!response) return res.status(400).end();
    return res.status(200).end();
  } catch (error) {
    return res.status(400).end();
  }
}

module.exports = signOut;
