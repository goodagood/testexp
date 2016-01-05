

var util = require("util");

var events = require("events");
var EventEmitter = events.EventEmitter;
// I don't know why nods.js website API is using: 
// var EventEmitter = require("events"); //???
// 2015 0106




function my_stream_with_event_emitter(){
    var emitter = new events.EventEmitter();

    // You can add functions as well,
    // as long as you know what emitter name it's functions.
    emitter.write = function(data){
        emitter.emit("data", data);
    }
    // again, we don't need to think about 'this' or 'prototype'
    // What about when we need to hide the 
    // 'parent functionality such as "on"', 
    // what if we need my_stream.on over-ride events.EventEmitter.on
    // AND we still want a way to use         events.EventEmitter.on
    // ... I don't want to answer it until there is a must to use it.
    //
    // I don't want to think about polymorphism

    return emitter;
}

var stream = my_stream_with_event_emitter();

console.log(stream instanceof EventEmitter); // true
//console.log(MyStream.super_ === EventEmitter); // true

stream.on("data", function(data) {
    console.log('Received data: "' + data + '"');
})
stream.write("It works!"); // Received data: "It works!"
