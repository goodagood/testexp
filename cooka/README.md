# 2016 0103 23:38 pm

# Try the codes for express.js session, and use file storage for seesion data.

We are going to use session for our express.js web application, and we are
going to save session data to local files.  Compare to memory session or
database session backend, this would be easy enough and serve as a good start
point.

The main purpose is not to give production-ready codes, the main purpose is to
review codes, and play with it.

## The software versions

the version of express.js and node.js used is a little bit old, node.js got a
big version change recently.  I havn't update to the newest version, but most
content should not be affected.  We are not going to try the newest feature of
node or express.

Let's check node and express version first.    

    node.js, express.js, express-session, session-file-store


Codes used here has been put to github repository:
    https://github.com/goodagood/testexp/tree/master/cooka


# run the codes

We are debugging, so we load app1.js into node.js shell.

We ask for a page localhost:3300/headers, it should return us a json shows the
headers of the request.  It's expected to see the session id in the headers.

If it's the first time the page shown, it will not contain the session id
information, because it had not been set yet.  Refreshing the page, then, we
can find it.


# codes

### app.js

    //...
    var app = express();
    //...
    app.listen(port_number);

    //...
    //session
    //file store

### session(options)

    app.use(session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true }
    }))

we set it in fsess.js

    session({
        store: new FileStore({path: sdir}),
        resave: false,
        saveUninitialized: false,
        secret: secrets,
        cookie: {maxAge: 3600000}
    });

### session store

Every session store _must_ be an `EventEmitter` and implement the following
methods:

   - `.get(sid, callback)`
   - `.set(sid, session, callback)`
   - `.destroy(sid, callback)`

Recommended methods include, but are not limited to:

   - `.touch(sid, session, callback)`
   - `.length(callback)`
   - `.clear(callback)`
    


# references:
    
    nodejs.org
        How to install node.js, there are decent documentation on their website:

    expressjs.com
        How to install express and express generator, here their website:

    express session:
        https://github.com/expressjs/session

    the file session storage:
        https://github.com/valery-barysok/session-file-store

<!--
  vim: set ft=markdown tw=78:
-->
