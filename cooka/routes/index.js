var express = require('express');
var router = express.Router();

var observer = require("../observer.js");
var p = console.log;


/* GET home page. */
router.get('/', function(req, res) {
    console.log('get / cookies: ', req.cookies);
    res.render('index', { title: 'Express' });
});


router.get('/headers', function(req, res) {
    if(req.session){
        if(req.session.visits_log){
            if(req.session.visits_log.length < 10 ) req.session.visits_log.push('/headers');
        }else{
            req.session.visits_log = ['/headers'];
        }
    }else{
        p('no req.session');
    }
    observer.keep({req:req, res:res});

    res.json(req.headers);
});

router.get('/login', function(req, res) {
    console.log('get / cookies: ', req.cookies);
    var userflash = req.flash('userflash');
    console.log('userflash: ', userflash);
    res.render('login', { title: 'LOGIN Check', message: userflash });
});


var passport= require('../passport/lib/index.js');
router.post('/login', function(req, res, next) {
    console.log('post /login, get  cookies: ', req.cookies);
    var username, password;
    if(req.body){
        var body = req.body;
        if(body.username) username = body.username;
        if(body.password) password = body.password;
        //if(/^aa/.test(username)) passport
    }

    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            
            //return res.redirect('/users/' + user.username);
            return res.send(`user: ${user.username}, id: ${user.userid}, <br> <a href="/login"> LOGIN AGAIN</a>`);
        });
    })(req, res, next);

    //req.flash('userflash', `username: ${username}, password: ${password}`);
    //res.redirect('/login');
});

module.exports = router;
