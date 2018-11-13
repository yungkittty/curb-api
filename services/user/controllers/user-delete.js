const remove = require('../services/remove');
const express = require('express');
const mongoose = require('mongoose');

async function userDelete(req, res) {
    const doService = await remove(req.body.id);
    res.status(200).json({
        removedUser: doService
    });
};

module.exports = userDelete;