
var fs = require("fs");
var u  = require("underscore");

var selfpath = './bin';
var selfpath = '/tmp/bbin';
var p = console.log;

function cc(){

    fs.stat(selfpath, function(err, condition){
        if(condition){
            p('got file condition');
            if(u.isFunction(condition.isDirectory)){
                if(condition.isDirectory()) return p('folder exists');
            }
        }else{
            p('going to mkdir');
            fs.mkdir(selfpath, function (err) {
                if(err) p('trying to make dir get: ', err);
                if (err && err.code != 'EEXIST'){
                    p('trying throw err when making dir: ', err);
                    throw err;
                }
            });
        }
    });
}
