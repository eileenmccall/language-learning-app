const bcrypt = require('bcrypt');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');

function create (email, password) {
    return bcrypt.hash(password, 10)
        .then(hash => {
            const user = new User({
                email: email,
                password: hash
            });
            return user.save()
        }).then(result => {
            return result;
        }).catch(error => {
            throw new Error('Saving user failed');
        });
}

function login (email, password) {

    if (!email || !password) {
        throw new Error('Username and password are required');
    }

    if (!_.isString(email) || !_.isString(password)) {
        throw new TypeError('Invalid argument');
    }

    let user;

    // Need to save token here somehow
    return User.findOne({
        email: email.toLowerCase().trim()
    }).then(dbUser => {
        if (!dbUser) { throw new Error('User not found'); }
        user = dbUser;
        return bcrypt.compare(password, user.password);
    }).then(result => {
        if (!result) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign(
            { email: user.email, _id: user._id },
            'this_is_a_secret_key', 
            { expiresIn: '1h' }
        );

        return token;
    }).catch(error => {
        throw new Error('Authentication failed');
    });
}

function getByToken (token) {
    return User.findOne({
        token: token
    }).then(user => {
        if (!user) { throw new Error('Invalid token'); }
        return user;
    }).catch(err => {
    });
}

module.exports = {
    create: create,
    login: login,
    getByToken: getByToken
}