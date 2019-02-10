const BasicStrategy = require('passport-http').BasicStrategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const userRepository = require('../repositories/user.repository');
const passport = require('passport');

passport.use(new BasicStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, ((email, password, done) => {
    userRepository.login(email, password)
        .then(token => {
            return done(null, token);
        }).catch(Error, () => {
            return done(null, false);
        }).catch(err => {
            console.error(err);    
        });
})));

passport.use(new BearerStrategy((token, done) => {
    userRepository.getByToken(token)
        .then(user => {
            return done(null, user);
        }).catch(error, function() {
            return done(null, false);
        }).catch(function(err) {
            console.error(err);
        });
}));

module.exports.require_basic = (req, res, next) => {
    passport.authenticate('basic', {session: false}, (err, token) => {
        req.token = token;
    })(req, res);
}

module.exports.require_auth = (req, res, next) => {
    passport.authenticate('bearer', { session: false }, function(err, user, info) {
        req.user = user;
        
        if (err)
        { 
          return next(err);
        }
        
        if (user) { 
          return next();
        }
    
        return res.send(403, { message: "You are not permitted to perform this action." });
      })(req, res);
}