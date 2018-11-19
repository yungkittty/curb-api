const express = require('express');

const router = express.Router();
const User = require('../schems/user');

/* GET users listing. */
router.put('/', (req, res) => {
  if (!req.body) res.status(401).end();
  if (!req.body.mail || !req.body.password) res.status(401).end();
  const newUser = new User({
    mail: req.body.mail,
    password: req.body.password,
    date: Date.now(),
  });

  newUser.save((err) => {
    if (err) res.status(409).end();
  });
  res.status(200).end();
});

module.exports = router;
