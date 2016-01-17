
var util = require('util');
var vm   = require('vm');

var context = {};

context.first = function(text) {
    console.log(text);
};

var created_contex = vm.createContext(context);

var scriptText = 'first("Hello World!");';
var script = vm.createScript(scriptText);
script.runInContext(created_contex);

// here we change the context
created_contex.addAfter = function(text) {
    console.log(text);
};

//var scriptText = 'first("Hello World!"); addAfter("Hello Universe!");';
scriptText += 'addAfter("Hello Universe!");';
script      = vm.createScript(scriptText);

script.runInContext(created_contex);

