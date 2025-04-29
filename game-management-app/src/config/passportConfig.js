const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/userSchema');

module.exports = function (passport) {
    // Serialize user
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // Deserialize user
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    // Local strategy for registration
    passport.use('local-register', new LocalStrategy({
        usernameField: 'phoneNumber',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, phoneNumber, password, done) => {
        User.findOne({ phoneNumber: phoneNumber }, (err, user) => {
            if (err) return done(err);
            if (user) return done(null, false, req.flash('error', 'Phone number already taken.'));

            const newUser = new User({
                age: req.body.age,
                phoneNumber: phoneNumber,
                gender: req.body.gender,
                isLegal: req.body.isLegal,
                password: password
            });

            newUser.save((err) => {
                if (err) return done(err);
                return done(null, newUser);
            });
        });
    }));

    // Local strategy for login
    passport.use('local-login', new LocalStrategy({
        usernameField: 'phoneNumber',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, phoneNumber, password, done) => {
        User.findOne({ phoneNumber: phoneNumber }, (err, user) => {
            if (err) return done(err);
            if (!user) return done(null, false, req.flash('error', 'No user found.'));

            user.comparePassword(password, (err, isMatch) => {
                if (err) return done(err);
                if (!isMatch) return done(null, false, req.flash('error', 'Invalid password.'));
                return done(null, user);
            });
        });
    }));
};
