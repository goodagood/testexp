const EventEmitter = require('events');

module.exports = new EventEmitter();

// after some time, 10s, emit
// the 'ready' event from the module itself.
setTimeout(() => {
    module.exports.emit('ready');
}, 10*1000);

//   Then in another file we could do
//
//   const a = require('./a');
//   a.on('ready', () => {
//     console.log('module a is ready');
//     });
