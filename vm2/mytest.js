
var vm = require('./index.js');

var vm = new vm.NodeVM({                   
  require: true,                          
  requireExternal: true                   
});                                       

vm.run('console.log("dont require foobar");; 3 + 3;');
