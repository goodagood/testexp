
# What we are doing is to make client side manipulation of folder listing

Each file has it's meta data, it's saved as json, such as file size, create
date, file type, etc.

If we let user fetch file metas from client side, then they get abilities to
render file date freely.

Thus, User can give file listing any style they want, we can hope some of them
might show us decent skills of renderrring the file information in webpages.

To do it, we set up a route address, by the address, user can send ajax post
request to get file meta data

# code ref

	https://github.com/goodagood/gg.git

# the URL of ajax request

We temperorily set it as

    /client/post-for-file-meta-list

It will get the cwd, current working directory, from the ajax body.

It return a json contains a list of file metas with reversed time order as
`meta_list`

Note we need to know who is asking for the list, so we can give information
according the user's role.  It can be different for owner, member or viewers.

jquery ajax will send the cookies when it fire up ajax requests, we are not
going to dig deeper for this topic.  What we are doing is to set up a demo,
that skilled user can control how their folder present information, to nearly
every details.

## the code

    client.js

basically, it fetch the meta, make up an json and send off the json response.

    function check_id is trying to check user's state of authentication, the
    function not finished.


# The user's file

User can write an html file, then upload it to the folder. 

Here, it's a.html. 

In the file, when we click the button, it will fetch the file metas.  There
is a template, we can fit data into the template, then show it on the webpage.


# upload the file

I am using a command line upload tools, it under re-writting.  It will be
better to use key pair to easy authentication, which is not finished. but I am
using it to speed up a lot uploadings.

# check the html

to see if it can fetch file metas, we use

    /file/get/path-to-file/name.extension

To get the file, it will actually serve the file, because it's html, we hope
to see the web page.

# check it in browser console



<!--
    vim: set ft=markdown tw=78:
-->
