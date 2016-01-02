
# Put it into REPL

We are going to try to put an `express.js` web application server inside
`node.js` REPL,  read–eval–print loop, in stort REPL.

`node.js` is javascript runtime on Chrome's V8 engine, node comes with a REPL, it's good enough.

Express is the web framework for node.

if we put a running express server inside node REPL, we are possible do some
interactive checking into server's runnings,
check into variables, objects, http request, responses, and more
under-wirings, to look insight how it works. 



we are going to add middlewares for express server, 

    session middleware, to keep browser state, and we are using mozilla client
    session, it uses
        mozilla client-session using encryption to protect data in cookies


## `expect`

Because we set up a little bit more, errors may happen in the process, then we
need redo alot, to save repeating, we automate it, we can use 'expect' to
automate the repeat job for node REPL.

`expect` is a command line tool, it talks to other interactive programs
according to a script.  So when we work in Shells, or node REPL, we can let
`expect` go automatically run commands, and keep it to the point we last time
left.  And then we can continue from that point, to save all the repeating
preparing things.



# let's check the codes

It's basically a simple web application of `express.js` framework.

## see the codes

firstly, we required 'express', the framework, it's a module, and other needed
modules,

then, we start to build a express application, then set it.
we use `handlebars.js` as template engine, we set the template file extension
as 'html'.

As an example, we set up a middleware, it do nothing but set an attribute into
session object, the name of the attribute is foo, it's value is a string:

    'i am foo I am one of the attribute in session...'

Then we add another middleware, it'a another function, which take arguments of
request, and reponse, and 'next', which is a function to call when it finish
the middleware things.  

The middleware named as 'watch', it will keep a reference of request object
into our object 'o', and keep a reference of response object.  So we can check
it.

Then we let the application, 'app', listen to the port number 3000 of our
localhost.  Save the return to a variable called 'server'.

Ok, it's a server.

## for the index web page

For the web page, we modify a little bit, to let the index page show a data,
it will be the current date time of the request coming.  We use server side javascript
'Date' object to get the date and time.


# interactive `expect` script

Because we are not supposed to make smart things run through for every time,
we want a script to help us each time we got drop off.  When we drop off, the
`expect` can be called to run to the point of droping.  So we are not going
break our fingers to do all the typings, and to repeatly run to the break
point.

We want the expect know when the application is ok from it's a lots
'callbacks', so we set up let it 'console.log' a string as signal, when expect
get the string, it know it's the point to let us come to play. 

we set the string as:

  console.log("ok start interact with me:");

This is the 'expect', I have changed it's mode to runnable.  so we can call it
here. 

## See The result, the server started by expect
    
    # here is things in REPL ...
    # the server is listening on port 3000, on localhost...
    # ...
    # let's see the browser
    # visit the localhost, with the port number 3000
    # yes, we got it, and the server side javascript give us the date
    # The date is when the server catch the request
    # ...
    # here is server in REPL...
    # the request came, so the middleware fire up...
    # we can check the request object...
    # we can check the response object...
    # we can check the applicationserver object...
    #......
    ......


# more concerns and explains

## client-session comes from mozilla github repository

I put links here for your referrence.

[mozilla client session](https://github.com/mozilla/node-client-sessions)

client-sessions is connect (express.js) middleware that implements sessions in encrypted
tamper-free cookies.  For a complete introduction to encrypted client side
sessions, refer to [Francois Marier's blog post on the subject][];

[Francois Marier's blog post on the subject]:
https://hacks.mozilla.org/2012/12/using-secure-client-side-sessions-to-build-simple-and-scalable-node-js-applications-a-node-js-holiday-season-part-3/

**NOTE:** It is not recommended using both this middleware and connect's
built-in session middleware.

for more details, check the mozilla website, or the github repository




## Some concerns about the client side session data

The method client-session useed is to put session data to user side, to
cookies,  let user's browser save the data.  It use encryptions.

But encryptions can get chance to be broken. 

So the common way to do session is to put a session id to user side, nothing
else, no more data, only an id.

But any way, we are not working on production server, we are hacking for fun.

There are more throughly discusses on mozilla's blog.


# end

We set up a express application, a simple one, then drop it into node.js REPL. 

we did it, the process can be improved by 'expect', the command line tool.

This is not supposed to be ideal approach to do things, but it's our topic:
to put a web server inside node.js REPL, ok, still not perfect...

I know i didn't finish the topic well, i put some codes into github repository:

    https://github.com/goodagood/testexp/tree/master/cookb



<!--
  vim: set ft=markdown tw=78:
-->
