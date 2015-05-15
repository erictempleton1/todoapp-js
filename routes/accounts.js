var express = require('express');
var passport = require('passport');
var Account = require('../models/Account');
var router = express.Router();


router.get('/register', function(req, res) {
    res.render('register.ejs', { });
});

router.post('/register', function(req, res) {
    Account.register(new Account({ username: req.body.username }),
        req.body.password, function(err, account) {
            if (err) {
                return res.render('register.ejs', { account: account });
            }

            passport.authenticate('local')(req, res, function () {
                res.redirect('/todos');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login.ejs', { user: req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/todos');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router;

/* 
notes:

also need to test
add more app.use to app.js file

*/