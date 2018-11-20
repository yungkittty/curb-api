const express = require('express');

const router = express.Router();
const User = require('../schems/user');

/* GET users listing. */
router.put('/', (req, res) => {
  if (!req.body) res.status(401).end();
  if (!req.body.login || !req.body.password) res.status(401).end();
  const newUser = new User({
    login: req.body.login,
    password: req.body.password,
    dateCreation: Date.now(),
  });

  newUser.save((error) => {
    if (error) {
      res.status(409).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
