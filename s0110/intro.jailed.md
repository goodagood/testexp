

Javascript things

How to let users run their codes, scripts ...
Then they get power to destroy the system ...
Then we put them into jail ...
:)



If we want user use API of our node.js application,
but not let user easily destroy the system

    var fs = require("fs");
    fs.unlink("Your/Server/Folder/Path", function(){});

The first line of code ...


We need a method to specify how to run user codes more safer, there might be
no way of total safety.  But compare to each other.

This is not serious topic, not tutorial, not academic, just a introduction of some codes
and try to use them.


# jailed
    
    execute untrusted code with custom permissions 

    asvd
    https://twitter.com/asvd0

    https://github.com/asvd/jailed


## another alter native:
    sandcastle

    I havn't research enough


## first glance

`jailed` has no dependencies ...

jailed get it clear, you run with plugin after set up it's enviroments.


## included example
...

## my example
    
    require fs

    console.log

    ...






<!--
    vim: set ft=markdown tw=78:
-->
