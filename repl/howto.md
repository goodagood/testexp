

We are going to set up an express.js application, a server,
then load it into node.js shell.  But we are going to focus on loading it into
node.js shell, not the preparation of set up node.js and express.js.

We are doing this to kill time.

By doing this we can check more variables and see the states of the
application.  Because we load it into node.js shell, we can do it
interactively, this is making fun, not seriously.

How to install [node.js](nodejs.org) ...
    nodejs.org

How to install express, express generator ...
    there will be more decent doc on [expressjs.com](expressjs.com)

    basically, i use the command

        $ express --hbs  <project-name>
        # here our project name is 'repl', without the single quote

After the command running, we get a folder named 'repl', and it contains
sub-folders, which is set by 'express', it gives us a decent structure to do
web application development.

Then 'cd' to this folder, install necessary npm modules by:

    $ npm install

After it finished, we get required modules installed to our local folder.

Then we do a little modifications to the codes given by express generator.

    ...read and edit codes...

Then we can test to load the app in shell,
ok, load it by dot command in node shell, remember we are in the current
folder

    >.load app.js

check the web page, to see every thing is ok.  check it with web browsers.

why i am always using many browsers, because i live in a place where
bureaucratic bosses guarding our network closely, i am not supposed to be safe
to read foreign software codes like from node.js or github or somewhere.  The network
bloocking is so harsh, i can be literally toortured or kelled when reading
those codes.  this is some reason i have to set different browsers
specifically to make me a liittle bit safer.


Yes, every thing is ok.
We do this not for business, or other seriously purpose, we do it to find funs
by playing with codes.  

Although I just showed it work, no bad harrasses should happen, but if you are
seriously care about software or hardware safe, please study all the topic and
contents before you try it.

I will [put codes to github repository](https://github.com/goodagood/testexp.git):

    https://github.com/goodagood/testexp.git

If it helps, I would be glad to know.
Thank you.



<!--
  vim: set ft=markdown tw=78:
-->
