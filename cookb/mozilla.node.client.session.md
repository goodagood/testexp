
# Put it into REPL

We are going to try to put an express.js web application into node.js REPL.
So we can interactively check into variables, objects, http request,
responses, and more under-wirings, to see how it works.  We are engineers,
right? 

If you once ever used ipython, you know why we like REPL, but REPL is not for
python programming language only, it has it's own long history ...

From wiki:

    A read–eval–print loop (REPL), also known as an interactive toplevel or
    language shell, is a simple, interactive computer programming environment that
    takes single user inputs (i.e. single expressions), evaluates them, and
    returns the result to the user; a program written in a REPL environment is
    executed piecewise. The term is most usually used to refer to programming
    interfaces similar to the classic Lisp machine interactive environment. Common
    examples include command line shells and similar environments for programming
    languages, and is particularly characteristic of scripting languages.[1]
    
# keyworkds

    node.js
    express.js, a framework for web app
    expect, a command line tool in linux shell bash

    session, keep browser state
    middleware, for express.js
    REPL, read, evaluate, print, loop, we get an REPL if we use node.js

    encryption, there's no data/anything only for those who can't decrypt it

# `expect`

`expect` is a command line tool, it talks to other interactive programs
according to a script.  So when we work in Shells, or node REPL, we can let
`expect` go automatically run commands, and keep it to the point we last time
left.  And then we can continue from that point, to save all the repeating
preparing things.


# Some un-orderred background information.

REPL, ... node.js has a REPL with it.

We are try to put a express.js web appliction into node.js REPL, play and have
fun.

Set them together, make it a little bit easier to check req, res, and server
things in node.js REPL, when working with express.js.  This is for checking
some codes, not for production.  Not sure this is good, it serves only for
when I want look inside it.

When working with server side javascripts, node.js, we often use express.js as
the web application framework.  In this tutorial we are going to try to put it together, and try
to set up a interactive REPL, where we can check into requests, responses, and
the server object.


# mozilla client-session

[mozilla client session](https://github.com/mozilla/node-client-sessions)

client-sessions is connect middleware that implements sessions in encrypted
tamper-free cookies.  For a complete introduction to encrypted client side
sessions, refer to [Francois Marier's blog post on the subject][];

[Francois Marier's blog post on the subject]:
https://hacks.mozilla.org/2012/12/using-secure-client-side-sessions-to-build-simple-and-scalable-node-js-applications-a-node-js-holiday-season-part-3/

**NOTE:** It is not recommended using both this middleware and connect's
built-in session middleware.

## Installation
`npm install client-sessions`

## Usage

Basic usage:

```js
var sessions = require("client-sessions");
app.use(sessions({
  cookieName: 'mySession', // cookie name dictates the key name added to the request object
  secret: 'blargadeeblargblarg', // should be a large unguessable string
  duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
  activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
}));

app.use(function(req, res, next) {
  if (req.mySession.seenyou) {
    res.setHeader('X-Seen-You', 'true');
  } else {
    // setting a property will automatically cause a Set-Cookie response
    // to be sent
    req.mySession.seenyou = true;
    res.setHeader('X-Seen-You', 'false');
  }
});
```





## Some concerns about the client side session data

The method is to put session data to user side, let user's browser save the
data.  As security guard, the encryption is used.  

But encryptions can get chance to be broken.  When we put encrypted data out,
we are welcoming others come to break it, because they get the data, so they
can try to break it out.

Here, we can think the word 'breakable' firstly means there is something
ready, it accessible and waiting to be broken.

So the common way to do session is to put a session id to user side, nothing
else, no more data.

But any way, we are not working on production server, we are hacking for fun.

Here's quote of it on the mozilla's blog:

     David Mulder

         I have seen this set up a number of times before in the old days and
         personally I don’t like it (at all). There are a number of security
         related reasons for that: First of all I don’t believe that encryption
         should be the primary security mechanism of any system. Why? Because
         encryption has a habit of failing as time passes. This probably won’t
         hold true forever, but it has been true for quite a number of times now.
         For example, I don’t know whether you’re using a separate encryption key
         for each user or a shared server key, but the first would be ‘hackable’
         (and I have seen that being done in real life for an important
         application, though it was relatively harder there to collect a large
         number of encrypted pieces of data). The second should be alright (for
         now). And either way, this is purely theoretical, but e.g. quantum
         computers will have a huge impact on various encryption schemes, and yet,
         it’s unlikely that this specific application will exist by then, but what
         I am trying to say is that an application should be fundamentally secure.
         And letting the user store secure data is *not* the way to make an
         application fundamentally secure.

         Oh and, besides that, I doubt that the overhead of a central server
         would be bigger than the overhead of sending all session data from
         the client to the server constantly (client upload is *slow* often).

        ......

# end

This is not supposed to be ideal approach to do things, but it's our topic:
to put a web server inside node.js REPL, ok, still not perfect...

I know i didn't finish the topic, so i put some codes into github repository:

    https://github.com/goodagood/testexp/tree/master/cookb



<!--
  vim: set ft=markdown tw=78:
-->
