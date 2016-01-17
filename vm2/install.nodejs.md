

# Way to upgrade node.js installation, for server

## for ubuntu, the pre-compiled version, 

    cd /tmp
    wget https://nodejs.org/dist/v4.2.4/node-v4.2.4-linux-x64.tar.xz
    tar xvf node-v4.2.4-linux-x64.tar.xz
    cd ./node-v4.2.4-linux-x64/bin
    ./node --version
    ./node # ... Ctrl-d
    ls 
    which node
    cd # to the dir where the above command show
    sudo mv node  node-back-up-date
    sudo mv npm   npm-back-up-date
    sudo ln -s /tmp/node-v4.2.4-linux-x64/bin/node
    sudo ln -s /tmp/node-v4.2.4-linux-x64/bin/npm
    # new check the node installed ...

## things about the package `bcrypt` `node-gyp`

http://stackoverflow.com/questions/33532528/nodejs-4-5-npm-install-fail-for-bcrypt-and-db-migrate

http://simon.fearby.com/blog/?p=2246

https://github.com/nodejs/node/blob/v4.0.0/CHANGELOG.md

https://github.com/nodejs/node/pull/2700

## wget, ln, some package bcrypt
    which node
    back up /usr/bin/node npm


I really want to love lisp, but often `quicklisp` search not give packages.

It's why I am using node.js, and it's quite good.

The JavaScript-based development platform, Node.js is becoming
increasingly popular.  We can use it for server-side and client-side.

The number of packages which can be install by npm is huge:
With over 100,000 node packages used by node package manager, “npm,”
there is a lot to love.

After installing Node.js locally, you might be interested in where to
find free Node.js hosting.  Ways to Install Node.js on Ubuntu

So, how do we install the Node.js platform? There are several main ways to do this:

Prior to any of these install options, you’ll want to remove old node package to avoid conflicts.

    1: Install the standard Debian/Ubuntu packages for “node” and “npm”
    2: Install from Debian/Ubuntu packages created by the Node.js (associated) team
    3: Install Node.js manually from standard binary packages on the official website
    4: Install Node.js from the Github source repository

We will cover the first three ways to install Node.js on Ubuntu in
this tutorial. Option 1 is the recommended method for the masses, as
it should be stable and secure. Options 2, 3, and 4 have the
advantage of keeping your node and npm packages the most current.
Remove Old node Package to Avoid Conflicts

On Ubuntu, the Node.js package has a similar name to the older
version, node. The latter is an amateur packet radio program you can
more than likely remove.

If you already have node installed, you might want to remove it. Some
Node.js tools might execute Node.js as node instead of Node.js,
causing conflicts.

You can look for and remove the node package by executing these
commands in a terminal. To access a terminal, navigate through the
desktop menu:
Applications → Accessories → Terminal

Run this command and if it says “install” in the right column, node
is on your system:

    $ dpkg --get-selections | grep node

If you found the old node package installed, run this command to
completely remove it:

    sudo apt-get remove --purge node

Install Node.js with Ubuntu Package Manager

To install Node.js, open a terminal and type the following command:
1

sudo apt-get install nodejs

Then install the node package manager, npm:
1

sudo apt-get install npm

Create a symbolic link for node, as many Node.js tools use this name to execute.
1

sudo ln -s /usr/bin/nodejs /usr/bin/node

Now we should have both the node and npm commands working:
1
2
3
4

$ node -v
v0.10.25
$ npm -v
1.3.10

Install Node.js with Maintained Ubuntu Packages

The process below is described here, too.

Add the Node.js-maintained repositories to your Ubuntu package source list with this command:
1

curl -sL https://deb.nodesource.com/setup | sudo bash -

Then install Node.js with apt-get:
1

sudo apt-get install nodejs

Optionally we can create a symbolic link for node (for reasons mentioned earlier):
1

sudo ln -s /usr/bin/nodejs /usr/bin/node

Using this install option, we end up with newer versions of Node.js and npm:
1
2
3
4

$ node -v
v0.10.35
$ npm -v
1.4.28

Install Node.js with Standard Binary Packages

Go to the official Node.js download page and download either the 32-bit or 64-bit Linux binary file, depending on your system type.

You can determine the CPU architecture of your server with these commands:
1
2
3
4

$ getconf LONG_BIT
64
$ uname -p
x86_64

You can download this file from the browser or from the console. The
latter is shown below (Note: the specific Node.js version might be
different for you):

    wget http://nodejs.org/dist/v0.12.0/node-v0.12.0-linux-x64.tar.gz

From a console window, go to the directory to which the Node.js
binary was downloaded, and then execute the following command to
install the Node.js binary package in “/usr/local/”:

    sudo tar -C /usr/local --strip-components 1 -xzf node-v0.10.34-linux-x86.tar.gz

You should now have both node and npm installed in “/usr/local/bin”.
You can check this typing:

    ls -l /usr/local/bin/node
    ls -l /usr/local/bin/npm


<!--
    vim: set ft=markdown tw=69:
-->
