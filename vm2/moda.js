
/*
 * This is the file 'moda.js'
 * it means 'module a'
 */

// a variable to hold lines of text
var lines = "ok?" + "\r\n";


function add_line(text){
    return lines += text + "\r\n";
}


exports.add_line   = add_line;
exports.show_lines = show_lines;

function show_lines(text){ console.log(lines); }
