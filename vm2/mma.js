var Magic = require('mmmagic').Magic;

var magic = new Magic();

var file_path = 'node_modules/mmmagic/build/Release/magic.node';
var file_path = "/tmp/s.css";

magic.detectFile(file_path, function(err, result) {
    if (err) throw err;
    console.log(result);
    // output on Windows with 32-bit node:
    //    PE32 executable (DLL) (GUI) Intel 80386, for MS Windows
});

var mmm = require("mmmagic");

var magic2 = new Magic(mmm.MAGIC_MIME_TYPE);
magic2.detectFile('node_modules/mmmagic/build/Release/magic.node', function(err, result) {
    if (err) throw err;
    console.log(result);
    // output on Windows with 32-bit node:
    //    application/x-dosexec
});
