
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


# I am testing simple codes for node.js VM, and following

To run user codes in a user's folder of goodogood.me, for example we
can let it run after each file uploading.  This will make user set
the file according to their own specifications.

They can change the style of the file's renderring in a web-page.   
They can make it looks good.
And it can has a lot applications, for example, audio file get played
in time order, thus make the folder as an voice message recorder.


# 

Here it's a way to do it, load and run user's code in a purposely
configured node.js virtual machine, vm2.

    var User_code_name = ".after.upload.js";
    var Log_file_name  = "code.hook.log";

# todo 2016 0120

For my project I want to let user run their codes for their files or folders. 
There may be some better ways to do this in node.

but the easiest I could find
in node.js was the vm module.


    var vm   = require('vm');
    var util = require('util');


'util' is used in this case,  the logging methods on
it shows the time stamps.

For my quick test, I’ll just do some hello world.

    var util = require('util');
    var vm = require('vm');
     
    vm.runInThisContext('var hello = "world";');

So this takes the code inside the string, compiles it via JavaScript V8, and
executes it. Really cool, but unfortunately there is no external representation
of what happened. Lets make it print something out.

We might think to try something like this:

    vm.runInThisContext('var hello = "world"; util.log("Hello " + hello);');

However, we would find that this causes a syntax error and throws up on us
complaining that ‘util’ is not defined. There is a rather subtle reason for
this. the `runInThisContext` method of vm does use the current context, however
it does not have access to local scope, and we defined util in local scope by
using the ‘var’ keyword.

If you change the first line to remove the ‘var’ keyword, then running it will
give a result like so:

    17 Aug 23:41:32 - Hello world


Anything defined as a global variable is accessible to us with
`runInThisContext`. A good thing if you want to have access to those global
variables, a bad thing if you would prefer to limit what the script has access
to. For instance, with `runInThisContext` you can do things like this:

    vm.runInThisContext('var hello = "world"; console.log("Hello " + hello);');

--

Assuming this is trusted code, that can be fine – but if it isn’t trusted code,
or if (in my case) it is trusted but you want to explicitly encourage it to
conform to a set API for interacting with things outside of it, you may wish to
exclude the dynamic script you are running from having access to the global
context. Fortunately, vm has a method which does this called runInNewContext.
For example, this next line will not work because runInNewContext creates a
new, ’empty’ context for the script to run in rather than using the existing
one – the script then has access to nothing outside of what JavaScript V8
itself provides – it cannot access global node functions.

Fails:

    vm.runInNewContext('var hello = "world"; console.log("Hello " + hello);');


It will say that ‘console’ is undefined as it no longer has access to the
global scope where console is contained.

So that is good – we have a way to limit the access the script has, but we need
to be able to provide it with something in order to have it effect anything
outside of itself and be useful. We do that by providing the context, or
‘sandbox’, for it to use via the optional second argument. Here’s an example:

    var util = require('util');
    var vm = require('vm');
     
    var myContext = {
       hello: "nobody"
    }
 
    vm.runInNewContext('hello = "world";', myContext);
 
    util.log('Hello ' + myContext.hello);

The second argument takes an object, the variables of which are injected into
the global context of the script. It is my understand that this passing is
actually done via some fairly sexy copy operations, so perhaps a relevant
performance note to make is that the size of this context is probably a
significant factor (will need to do some testing myself to see). Similarly, you
can of course pass in functions with the context – those functions may utilize
calls outside the sandbox object itself, such as this:

    var myContext = {
    }
    myContext.doLog = function(text) {
        util.log(text);
    }
 
    vm.runInNewContext('doLog("Hello World");', myContext);

And of course we can define whole object structures as such:

    var myContext = {
       utilFacade: {
       }
    }
    myContext.utilFacade.doLog = function(text) {
        util.log(text);
    }
 
    vm.runInNewContext('utilFacade.doLog("Hello World");', myContext);

Though I have found at this point we begin to get my JavaScript editor of
choice confused about what is legal and what is not.

Stepping back for one second, I wanted to note that it is important to think
about what is going on here. We are feeding text in, which is compiled at the
time runInNewContext. Depending on application, it may not be desired to
compile it at the time you run – we might instead want to do this step before
hand. This is accomplished via the Script object, like so:

    var myScript = vm.createScript('var hello = "world";');
    myScript.runInNewContext(myContext);

And we can still include calls to our context, so this works fine:

    var myContext = {
      utilFacade: {
      }
    }
    myContext.utilFacade.doLog = function(text) {
        util.log(text);
    }
     
    var myScript = vm.createScript('utilFacade.doLog("Hello World");');
    myScript.runInNewContext(myContext);


That said, it is important to understand that this is not very safe, as by the
very fact that you are ‘updating’ the context you know there can be leakage –
for example:

    var myScript = vm.createScript('someVariable = "test"; utilFacade.doLog("Hello World");');
    myScript.runInNewContext(myContext);
     
    var anotherScript = vm.createScript('utilFacade.doLog(someVariable);');
    anotherScript.runInNewContext(myContext);

This will print out ‘test’ to the log. We could have just as easily replaced
anything in the context, causing crazy unexpected behavior between executions.
Additionally there are some other fundamental unsafe things about this – for
instance, our script could consist of a never-ending loop, or a syntax error or
similar issue that halts or causes the entire node instance to go into an
infinite loop. In general, this simply is not a safe avenue for dealing with
untrusted code. I’ve thought about the problem a bit and read some blogs on it,
perhaps I’ll post something about what to do in such situation later.

For now, I would be remiss if I did not mention this “undocumented” method –
not the new method used to create the context, and the associated call
differences (passing in the context object instead).

    var myContext = vm.createContext(myContext);
     
    var myScript = vm.createScript('someVariable = "test"; utilFacade.doLog("Hello World");');
    myScript.runInContext(myContext);
     
    var anotherScript = vm.createScript('utilFacade.doLog(someVariable);');
    anotherScript.runInContext(myContext);

If you are like me, you may be wondering ‘what is the point? it seems to work
similar’ and as far as I can tell currently it pretty much operates the same in
terms of functionality – I may be wrong on this point though in some specific
use case, if so please feel free to drop a comment on it and I’ll update
accordingly.

While functionally it seems the same, in reality something very different is
occurring under the covers. To get an idea of what, precisely, I think it is
worthwhile to consider this git commit somebody made which I think provides
some useful reference:

https://gist.github.com/813257

For the lazy, here’s the code:

var vm = require('vm'),
   code = 'var square = n * n;',
   fn = new Function('n', code),
   script = vm.createScript(code),
   sandbox;
 n = 5;
 sandbox = { n: n };
 benchmark = function(title, funk) {
   var end, i, start;
   start = new Date;
   for (i = 0; i < 5000; i++) {
     funk();
   }
   end = new Date;
   console.log(title + ': ' + (end - start) + 'ms');
 }
 var ctx = vm.createContext(sandbox);
 benchmark('vm.runInThisContext', function() { vm.runInThisContext(code); });
 benchmark('vm.runInNewContext', function() { vm.runInNewContext(code, sandbox); });
 benchmark('script.runInThisContext', function() { script.runInThisContext(); });
 benchmark('script.runInNewContext', function() { script.runInNewContext(sandbox); });
 benchmark('script.runInContext', function() { script.runInContext(ctx); });
 benchmark('fn', function() { fn(n); });

This is a pretty simple benchmark script – there are some fundamental issues
with it but it gives enough of a view that we can gauge a general sense of
relative performance of various methods of executing the script. The 
`script.*` functions will use the pre-compiled script whereas the first two will compile
at time of execution. The last item is a reference point. Executed on my
machine, this gives me the following result:

vm.runInThisContext: 127ms
vm.runInNewContext: 1288ms
script.runInThisContext: 3ms
script.runInNewContext: 1110ms
script.runInContext: 23ms
fn: 0ms

So you can see that there are significant performance implications. The
pre-compiled examples run faster than those that compile on the fly – no real
surprise there – and if we were to increase the number of executions we would
find this difference exacerbated. Additionally, we see something significant is
happening different with the ‘runInContext’ and ‘runInThisContext’ vs
‘runInNewContext’. The difference being that runInNewContext does exactly what
it says – it creates a new context based on the object being passed in. The
other two methods use the already created context object, and we can see that
there is quite a benefit inherent in this – creating a context is an expensive
task.

This entry was posted in Javascript, Node.js and tagged coding, javascript,
node, node.js, nodejs, programming. Bookmark the permalink.



##



One thing I noticed today is that this works:

    var util = require('util');
    var vm = require('vm');
     
    var contextObject = {
    }
    contextObject.contextMethod = function(text) {
        console.log(text);
    }
    var myContext = vm.createContext(contextObject);
    myContext.contextMethod2 = function(text) {
    console.log(text);
    }
    var scriptText = 'contextMethod("Hello World!"); contextMethod2("Hello Universe!");';
    var script = vm.createScript(scriptText);
    script.runInContext(myContext);

Which in general makes sense, but it is nice to see that you can
 modify the context.


<!--
    vim: set ft=markdown tw=69:
-->
