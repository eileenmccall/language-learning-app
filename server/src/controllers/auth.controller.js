const express = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(result => {
                    res.status(201).json(result);
                })
                .catch(error => {
                    res.status(500).json(error);
                });
        })
});

router.post('/login', (req, res, next) => {
    let user;

    User.findOne({
        email: req.body.email
    }).then(dbUser => {
        if (!dbUser) {
            return res.status(401).json({
                message: 'No user found'
            });
        }
        user = dbUser;
        return bcrypt.compare(req.body.password, user.password);
    }).then(result => {
        if (!result) {
            return res.status(401).json({
                message: 'No user found'
            });
        }
        
        const token = jwt.sign(
            { email: user.email, _id: user._id },
            'this_is_a_secret_key', 
            { expiresIn: '1h' }
        );

        return res.status(200).json({
            token: token
        });
    }).catch(err => {
        return res.status(401).json({
            message: 'invalid password'
        });
    })
})

module.exports = router;