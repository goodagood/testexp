var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Mozilla's session, it can be secured
var session_factory = require('client-sessions');

var p = console.log;


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// for session, not sure if it can be put here
app.use(session_factory({
      cookieName: 'asession',
      secret: 'thE_secr_t_we_8_to_do_encry6',
      duration: 30 * 60 * 1000,
      activeDuration: 5 * 60 * 1000,
}));


// as an middleware? 
app.use(function(req, res, next) {
    //p('in the some middle ware');
    if (req.asession.foo) {
        p('we got foo');
    } else {
        // setting a property will automatically cause a Set-Cookie response
        // to be sent
        req.asession.foo = 'i am foo, I am one attribut in session, i am foo';
        p('we set foo, ');
    }
    next();
});


/*
 * things to drop into repl, look inside what happens.
 * position matters
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


module.exports = app;




var port_number = 3000;

var server = app.listen(port_number, function() {
  //debug('Express server listening on port ' + server.address().port);
  console.log('Express server listening on port ' + server.address().port);
  console.log("ok start interact with me:");
});


