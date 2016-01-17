
var vm   = require('vm');
var util = require('util');
 
//vm.runInThisContext('var hello = "world";');

//vm.runInThisContext('var hello = "world"; util.log("Hello " + hello);');
//vm.runInThisContext('while(true){}');

vm.runInNewContext('var hello = "world"; console.log("Hello " + hello);', {console:console});


//var myContext = {
//   hello: "nobody"
//}
//
////vm.runInNewContext('hello = "world";', myContext);
//
//myContext.doLog = function(text) {
//    util.log(text);
//}
//vm.runInNewContext('doLog("Hello World");', myContext);
// 
 
 
