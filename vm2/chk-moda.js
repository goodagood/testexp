

// file: chk-moda.js

var moda = require("./moda.js");


var p = console.log;

function chk(msg){
    msg  = msg || " check it, just add a line, " + Date.now().toString();
    msg += "\r\n add more side effects to it" + Date.now().toString();

    return moda.add_line(msg);
}

exports.chk = chk;


var another_repeat = setInterval(function(){
    p(`Checkit, I want to see the lines: ${chk()}`);
}, 3*1000);

setTimeout(function(){
    clearInterval(another_repeat);
}, 36*1000);

