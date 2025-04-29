const express = require('express');
const passport = require('passport');
const router = express.Router();

// Register route
router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/games',
    failureRedirect: '/register',
    failureFlash: true
}));

// Login route
router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/games',
    failureRedirect: '/login',
    failureFlash: true
}));

// Logout route
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});

module.exports = router;