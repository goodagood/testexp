var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var saver = require("./save.js");
router.post('/save', function(req, res, next) {
    var name, text;
    if(req.body){
        if(req.body.name) name = req.body.name;
        if(req.body.text) text = req.body.text;
    }

    saver.save(name, text, function(err, success){
        res.json({ saver_callback: true, err: err, success:success });
    });

});

module.exports = router;
