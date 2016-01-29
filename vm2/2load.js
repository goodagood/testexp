
var m = require("./moda.js");
var u = require("underscore");
var p = console.log;

var show = m.add_line('o, in shell');
p(show);

var s       = require("./see-moda.js");
var c       = require("./chk-moda.js");

p(s.see());
p(c.chk());


function require_again(module){
    delete require.cache[require.resolve(module)]
    return require(module)
}

var s_again = require_again("./see-moda.js");
var c_again = require_again("./chk-moda.js");
