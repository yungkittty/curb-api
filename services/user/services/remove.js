const express = require('express');
const mongoose = require('mongoose');
const User = require('../../../models/user');

async function remove (id) {
   const user = await User.findByIdAndRemove(id)
    return user;
};

module.exports = remove;