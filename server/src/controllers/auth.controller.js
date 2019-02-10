const express = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const auth = require('../middleware/auth.middleware');
const userRepository = require('../repositories/user.repository');

const router = express.Router();

router.post('/register', (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        res.status(500).json({
            message: 'Both username and password are required'
        });
    }

    if (!_.isString(email) || !_.isString(password)) {
        res.status(500).json({
            message: 'Invalid argument'
        });
    }

    userRepository.create(req.body.email, req.body.password)
        .then(user => {
            res.status(201).json(user);
        });
});

router.post('/login', auth.require_basic, (req, res, next) => {
    return res.status(200).json({
        token: req.token
    });
});

module.exports = router;