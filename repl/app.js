
// this is app.js
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

// add a tool in debugging
var u = require("underscore");

// this is the application
var app = express();

// setting and configurations...
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// use is use some middlewares, it also some basic configuration, kind of
//
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



/*
 * This  is what we added, simply to watch req and res.
 * We add a variable 'o', to write codes this way is not good for production,
 * but we are kind of doing debugging things, or kill time things.
 *
 * watcher is a function work as middleware, 
 * to keep referrences of req, res.
 * so we can watch it later in the node shell.
 *
 * line position matters
 */
var o = {};
function watcher(req, res, next) {
    console.log(' you are watching through express.js middle-ware like function ');
    o.req = req;
    o.res = res;

    // set a cookie for checkings ... we are not doing production coding...
    res.cookie('u_name', 'haha, yuou get name');
    next();
}
app.use(watcher);


app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


//module.exports = app;



// copied and modified from ./bin/www
// app.set('port', process.env.PORT || 3000);
var port_number = 3300;

var server = app.listen(port_number, function() {
  console.log('Express server listening on port ' + server.address().port);
});
