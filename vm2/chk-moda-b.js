
var moda = require("./moda.js");

var p = console.log


function check_b(msg){
    msg = msg || "\r\n to add a line, " + Date.now().toString();

    return moda.add_line(msg);
}

var b = check_b;

exports.chk = chk;
