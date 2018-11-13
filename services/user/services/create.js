const express = require('express');
const mongoose = require('mongoose');

const User = require('../../../models/user')

function create(user) {
    const current_date = new Date();
    const user = new User({
        login: user.login,
        password: user.password,
        dateCreation: current_date
    });
    user.save()
    return user;
};

module.exports = create;