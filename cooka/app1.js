var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var u = require('underscore');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// used when drop into repl,  no __dirname when we load code into nodel repl
if(typeof __dirname === 'undefined'){
    var __dirname = '/home/za/workspace/code-pieces/js/hasee/express/session.test/';
}

var secrEt = 'i 8m secrEt!';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(secrEt));
app.use(express.static(path.join(__dirname, 'public')));


/*
 * Start the session settings.
 */
//var session = require('express-session');
//var FileStore = require('./file-session-copy')(session);
//app.use(session({
//    //store: new FileStore({path: './store-file-session'}),
//    //resave: false,
//    saveUninitialized: false,
//    secret: 'secret means: not to tell'
//}));

var fsession = require('./fsess.js');
var sess_folder = '/home/za/tmp/sess';
var sess = fsession.prepare_session_middle_ware(sess_folder, secrEt);
app.use(sess);
//** end the session settings.


/*
 * things to drop into repl, look inside what happens.
 */
var o = {};
function watch(req, res, next) {
    p(' you are watching through express.js middle-ware like function ');
    if(o){
        o.req = req;
        o.res = res;
    }
    //if(next) return next(req, res, next);
    next();
}
//var watcher = require('./watch.js');
//console.log(1104, u.isFunction(watcher));
app.use(watch);


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


var myserver;
function applisten(){
    myserver = app.listen(3000, function() {
      console.log('Express server listening on port 3000');
    });
}
applisten(); //run

module.exports = app;
