
A variable outside a function, the function get exported.

When not noticed, the variable get changed else-where. 

We build the case,

What we are going to see is the variable can be changed by any module
using it.  This can be suprise if we don't know what's happening.

We declare a local variable, but it can be changed by any function
that can access the variable, it can be from some where we
don't know.  To avoid the un-expected changes, we should not write
codes as shown here.

It's not good or bad.


# we have 3 files, the first been use by the next two.

    - moda.js

    - chk-moda.js
    - see-moda.js

    - then we go to the node.js shell, REPL

# refs

https://nodejs.org/api/modules.html
http://www.w3schools.com/js/js_timing.asp
http://stackoverflow.com/questions/9210542/node-js-require-cache-possible-to-invalidate
https://github.com/goodagood/gg


# in 'moda.js', there is an exported function,

It use a variable local in module

    // in file: moda.js

    // 'lines' hold lines of text
    var lines = "ok?" + "\r\n";

    // In the function, it use 'lines' of the above.
    exports.add_line = function add_line(text){
        return lines += text;
    }

## If 2 other modules (files) use 'moda.js'

Because the function 'add line' exported and can be used,
They should actually access the variable 'lines' in-directly, which
is local in moda.

We check it by making 2 files, javascript files, requiring module a,
'moda.js',  and see what happens.

    see-moda.js
    chk-moda.js


# Node.js has a simple module loading system. 

In Node.js, files and modules are
in one-to-one correspondence. As an example, chk-moda.js loads the module moda.js
in the same directory.

The contents of chk-moda.js:

    var moda = require('./moda.js');
    ...




# It happen this way, partly because Caching in module

Modules are cached after the first time they are loaded. This means
(among other things) that every call to require('moda') will get
exactly the same object returned, if it would resolve to the same
file.

Multiple calls to require('moda') may not cause the module code to be
executed multiple times. This is an important feature. With it,
"partially done" objects can be returned, thus allowing transitive
dependencies to be loaded even when they would cause cycles.

If you want to have a module execute code multiple times, then export
a function, and call that function. 


# codes in chk-moda or see-moda don't know 

the other is changing the variable, we can call it 'un-expected', or
side effects.


# I am doing codes this way not for seriously purposes

Just as side way pleasure things during programming, and hope it help.

end

<!--
    2016 0118
    vim: set ft=markdown tw=69:
-->
