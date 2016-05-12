var readChunk = require('read-chunk'); // npm install read-chunk 
var fileType = require('file-type');

//var bf = readChunk.sync('unicorn.png', 0, 262);
//var bf = readChunk.sync('/tmp/s.css', 0, 262);
var bf = readChunk.sync('/tmp/acar.jpg', 0, 262);
 
var ft = fileType(bf);
console.log(ft);
//=> {ext: 'png', mime: 'image/png'} 
