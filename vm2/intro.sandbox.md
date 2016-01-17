
# Run scripts from unknow?

To running user-submitted scripts in node.js, 
I.e. in an environment that prevents code from accessing
sensitive data and APIs?

    `vm.runInNewContext(userScript, {})`
    
Node.js comes with a included module VM,  it's part of node core.                         
But The docs say it's only intended for known-good code.
                                    

# Ref.

Node.js API: 
https://nodejs.org/api/vm.html

David Mclifton:
http://www.davidmclifton.com/2011/08/18/node-js-virtual-machine-vm-usage/
http://www.davidmclifton.com/2011/08/18/node-vm-continued/

gf3/sandbox:
https://github.com/gf3/sandbox

VM2:
https://github.com/patriksimek/vm2

Jailed, another github project ...



# Details 1
                                            
You should always run untrusted code in a separate process, which is
exactly what the sandbox module does. 

https://github.com/gf3/sandbox

A simple reason is that

'while(true){}'
vm.runInNewContext('while(true){}', {})

will freeze node.


It starts by spawning a separate process, which will later send the
result serialized to JSON on its stdout. The parent process continues
executing regardless of what the child does and can trigger a
timeout.

The untrusted code is then wrapped in a closure with strict mode (in
regular JavaScript, you can use arguments.callee.caller to access
data outside of your scope). Finally, a very limited global object is
passed to prevent access to node's API. The untrusted code can only
do basic computation and has no access to files or sockets.

While you should read sandbox's code as an inspiration, I wouldn't
recommend using it as is:

1, The code is getting old and hasn't been updated for 7 months.

2, The Child Process module in node already provides most of the
features you need, especially `child_process.fork()`.

3, The IPC channel provided by `child_process.fork` probably has
better performances.

For increased security, you could also consider using setuid-sandbox.
It's the code used by Google Chrome to prevent tab processes from
accessing the file system. You would have to make a native module,
but this example seems straightforward.


The methods in the vm module now support a timeout parameter which
lets you safely execute while(true) {}. It obviously doesn't address
the security concerns, but it does address endless loops. – Andrew
Paprocki Jun 3 '13 at 14:02





    
Still, I want to point to another similar
question (more recent) which may be helpful to people with the same
problem: stackoverflow.com/questions/17513212/… – Akhorus Apr 20 '15
at 13:50
        
            

There is a newer module on github called vm2 that addresses some of
these concerns, especially in Node.JS applications. Maybe that will
help some others find it, as I have just done.




<!--
    vim: set ft=markdown tw=69:
-->
