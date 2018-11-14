const read = require('../services/read');
const express = require('express');
const mongoose = require('mongoose');

async function userRead(req, res) {
    const doService = await read(req.body.id);
    res.status(200).json({
        returnedUser: doService
    });
}

module.exports = userRead;
