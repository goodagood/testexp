
# this is a simple express.js application

We ar going to check cookie setting with it.

## references:
    
    How to install node.js, there are decent documentation on their website:
        nodejs.org

    How to install express and express generator, here their website:
        expressjs.com

For an start up express.js web application, we use what the framework
offerred.  

Here is the folder structure.  The app.js is the node.js script for express.js
application, as the name suggests.  There are folders of bin, routes, public
and views.

    bin: get some file to run
    routes: is a sub folder to organise url routerrings
    views: is sub folder has web page templates
    public: suppose to serve static files

all those comes from express generator, you can read their documents, it's
simple enough.

Then,
We just modified a little bit from original codes generated by express.js.

The app.js file.

We did small editing, very simple we copy and paste the content of the file 
./bin/www into app.js,

we add a function as middleware, let app use the function.

The name of the function is 'watcher', it supposes to watch.

The job of the function watcher is to keep a reference of request and
response,

Those objects are commonly called 'req' and 'res' in express.js/node.js
codings.

ok, not too much changes. 

Let load it into node.js shell.  

The .dot commands can be list out be .help in node.js shell, this is the shell
some call it interpreter, or read-eval-print-loop, REPL, often we get this
kind of interactive enviroment with scripting programming languages.

It's okay.  We just load the script file app.js, which we just modified a
little.  

It shows the server is waiting for request at port number 3300.

Fire up a web page request in browser, we get some console loggings in the
node shell.

return to view the file of app.js, what we just loaded.  Here we can see, the
cookieparser is used by default.

Let's check if we get cookie in our request object, supposly not.  Because no
cookie has been set yet.

Please be noted that this is the last request object, the response object has
just been send out.


# How about testing with a cookie setting

...    


# http cookie

quote from wikipedia:

    An HTTP cookie (also called web cookie, Internet cookie, browser cookie or
    simply cookie), is a small piece of data sent from a website and stored in the
    user's web browser while the user is browsing it. Every time the user loads
    the website, the browser sends the cookie back to the server to notify the
    user's previous activity.[1] Cookies were designed to be a reliable mechanism
    for websites to remember stateful information (such as items added in the
    shopping cart in an online store) or to record the user's browsing activity
    (including clicking particular buttons, logging in, or recording which pages
    were visited in the past). Cookies can also store passwords and form content a
    user has previously entered, such as a credit card number or an address.

    The tracking cookies, and especially third-party tracking cookies, are
    commonly used as ways to compile long-term records of individuals' browsing
    histories – a potential privacy concern that prompted European[2] and U.S. law
    makers to take action in 2011.[3][4]

    Other kinds of cookies perform essential functions in the modern web. Perhaps
    most importantly, authentication cookies are the most common method used by
    web servers to know whether the user is logged in or not, and which account
    they are logged in with. Without such a mechanism, the site would not know
    whether to send a page containing sensitive information, or require the user
    to authenticate themselves by logging in. The security of an authentication
    cookie generally depends on the security of the issuing website and the user's
    web browser, and on whether the cookie data is encrypted. Security
    vulnerabilities may allow a cookie's data to be read by a hacker, used to gain
    access to user data, or used to gain access (with the user's credentials) to
    the website to which the cookie belongs (see cross-site scripting and
    cross-site request forgery for examples).[5]

    ...




<!--
  vim: set ft=markdown tw=78:
-->
