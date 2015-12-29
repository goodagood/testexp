var util = require("util");
var EventEmitter = require("events").EventEmitter;

function MyStream(a) {
    EventEmitter.call(this);
}

//var myo = {};
//util.inherits(myo, EventEmitter);

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
    this.emit("data", data);
};

var stream = new MyStream();

console.log(stream instanceof EventEmitter); // true
console.log(MyStream.super_ === EventEmitter); // true

stream.on("data", function(data) {
    console.log('Received data: "' + data + '"');
})
stream.write("It works!"); // Received data: "It works!"
