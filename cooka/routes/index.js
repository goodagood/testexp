var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    console.log('get / cookies: ', req.cookies);
    res.render('index', { title: 'Express' });
});


router.get('/headers', function(req, res) {
  res.json(req.headers);
});

module.exports = router;
