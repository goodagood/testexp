

// file: see-mods.js

var moda = require("./moda.js");
var p    = console.log


function see(msg){
    msg = msg || "see it, I added a line, " + Date.now();

    return moda.add_line(msg);
}


exports.see = see;


var repeat = setInterval(function(){
    p(`see o, I want to see the lines: ${see()}`);
}, 5000);

setTimeout(function(){
    clearInterval(repeat);
}, 26*1000);

