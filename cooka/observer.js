
var u = require("underscore");
var p = console.log;

var space = {};

function keep(obj, storage){
    if(typeof storage !== 'object') var storage = space;
    if(typeof obj     !== 'object') return space;

    u.extend(storage, obj);
    //p('arguments: ', arguments);
    //p('storage:', storage);
    //return storage;
}

function get_space(){ return space; }

function show_space(){
    console.log(space);
    return space;
}

module.exports.keep = keep;
module.exports.get_space  = get_space;
module.exports.show_space = show_space;


if(require.main === module){
    function tobs(){
        var a = 1, b = 2;
        var t = {aa: 1, bb:2};

        keep(t);
    }

    tobs();
}

