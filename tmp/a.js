/*
 * Parse an json file
 * 2015 1215
 */

var fs = require("fs");


var filepath = '/tmp/t1215.json';
var p = console.log;


function read_print(fp){
    fp = fp || filepath;

    fs.readFile(fp, 'utf8', function(err, text){
        if(err) return p('err: ', err);
        //p(text);

        var j = JSON.parse(text);
        p(j);
        p('j.value: ', j.value);

    });
}


if(require.main === module){
    read_print();
}
