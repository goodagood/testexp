
var multiline = require("multiline");


const str = multiline(function(){/*
    <!doctype html>
    <html>
        <body>
            <h1 class="oh-h1">❤ unicorns</h1>
            <p id='first'>the paragraph</p>
        </body>
    </html>
*/});


console.log(str);
