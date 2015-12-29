var express = require('express');
var router = express.Router();

var p = console.log;


/* GET home page. */
router.get('/', function(req, res) {
    p('get /, req.cookies', req.cookies);
    res.render('index', { title: 'Express' });
});

router.get('/sone', function(req, res) {
    p('get /sone, req.cookies', req.cookies);
    p('get /sone, req.asession', req.asession);
    res.render('sone', { title: 'Express' });
});

module.exports = router;
