

//x.js:

setTimeout(() => {
      module.exports = { a: 'hello' };
}, 0);

////y.js:
//
//const x = require('./x');
//console.log(x.a);
