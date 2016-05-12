
// url and querystring

var url = require("url");
var qs  = require("querystring");

var p = console.log;

p(
    url.resolve('/one/two/three', 'four'),
    url.resolve('http://example.com/', '/one'), 
    url.resolve('http://example.com/one', '/two'));
