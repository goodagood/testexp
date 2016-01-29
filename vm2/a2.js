
//const a = require('./a');
var a = require('./a');
a.on('ready', () => {
    console.log("oo, ");
    console.log("module a is ready");
});
