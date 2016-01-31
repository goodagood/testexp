
var path = require("path");
var fs   = require("fs");

var Parent_dir = path.dirname(__dirname);
var   Data_dir = path.join   (Parent_dir, 'public/saved');


var p = console.log;

function save(name, text, callback){
    text = text || 'you give me no text';
    name = name || Date.now().toSting();
    callback = callback || function(){};

    var full_path = path.join(Data_dir, name);

    fs.writeFile(full_path, text, callback);
}


module.exports.save = save;


function check_save(name, text){
    var name = `test-${Date.now().toString()}`;
    var text = `text-${Date.now().toString()}\r\n`;

    save(name, text, function(err, what){
        p(err, what);
    });
}

if(require.main === module){
    p('__dirname'); p(__dirname);
    p('Data_dir');  p(Data_dir);
    check_save();
}

