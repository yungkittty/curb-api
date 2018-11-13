const update = require('../services/update');
const express = require('express');
const mongoose = require('mongoose');

async function userUpdate(req, res) {
    const doService = await update(req.body.id, req.body.changePassword);
    res.status(200).json({
        updatedUser: doService
    });
};

module.exports = userUpdate;