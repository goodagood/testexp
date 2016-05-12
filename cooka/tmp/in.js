var aa = [ '4ff023908ed2842c1265d9e4', '4ff0d75c8ed2842c1266099b' ];

//And I have to find if the following, is inside that array

var a = '4ff0d75c8ed2842c1266099b'

var u = require("underscore");

console.log(a in aa);
console.log(0 in aa);
console.log(aa.indexOf(a));
console.log(u.contains(aa, a));
