var express = require('express');
var router = express.Router();

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
    res.json(req.headers);
});

module.exports = router;
