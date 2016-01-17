var EventEmitter = require('events').EventEmitter;
var util = require('util');

// Define the constructor for your derived "class"
function Master(arg1, arg2) {
    // call the super constructor to initialize `this`
    EventEmitter.call(this);
    // your own initialization of `this` follows here
};

// Declare that your class should use EventEmitter as its prototype.
// This is roughly equivalent to: Master.prototype = Object.create(EventEmitter.prototype)
util.inherits(Master, EventEmitter);
