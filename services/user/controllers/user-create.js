const create = require('../services/create');
const express = require('express');

function userCreate(req, res) {
    const doService = create(req.body);
    res.status(200).json({
        createdUser: doService
    });
};

module.exports = userCreate;