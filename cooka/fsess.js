
/*
 *  Checking using file to save session
 */


//var session   = require('express-session');
var session   = require('./session/index.js');

var FileStore = require('./fstore.js')(session);

var p = console.log;

//var prepare_session = session({
//    store: new FileStore({path: './store-file-session'}),
//    resave: false,
//    saveUninitialized: false,
//    secret: 'keyboard cat'
//})

function prepare_session_middle_ware(sdir, secrets){
    sdir = sdir || '/tmp';
    //secrets = secrets || 'I-am th2 Secret W0rds!';

    p('going to return session');
    return session({
        store: new FileStore({path: sdir}),
        resave: false,
        saveUninitialized: false,
        secret: secrets,
        cookie: {maxAge: 300 * 1000}
    });
}


module.exports.prepare_session_middle_ware = prepare_session_middle_ware;


//app.use(session({
//    store: new FileStore({path: './store-file-session'}),
//    resave: false,
//    saveUninitialized: false,
//    secret: 'keyboard cat'
//}));


if(require.main === module){
    prepare_session_middle_ware();
}
