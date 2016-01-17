
# what i am doing is reading source codes of express-session

it's open source, MIT license...
at the beginning, require a few packages
the exports...
the session function, it return a middle ware for express.js


# referrences

    https://github.com/expressjs/session

    search: stackoverflow [http] [session] [cookie]
            google http session ...

    my code used in this video:
    https://github.com/goodagood/testexp


# background

What are sessions? How do they work?

           When we come across the terms 'cookies' and 'sessions'.
           Cookies in network or browsers means small piece of data, 
           that they store some info in a key value
           pair on the browser. 
           Some has confusion regarding
           sessions, in a session, some times, we store data in a cookie on the user's
           browser.

           For example - user login using username='rasmus' and password=
           'default'. In such a case the data will be posted to the server
           which is supposed to check and log user in if authenticated. However
           during the entire process the server also generates a session ID
           which will be stored in a cookie on my browser. Now the server also
           stores this session ID in its file system or datastore.
        
           But based on just the session ID, how would it be able to know 
           username during the subsequent visits of the site? 
           Yes, it is possible if the user already login, and if the server
           implemented a way to keep session with the user.


           Because http is stateless, in order to associate a request to any
           other reques, you need a way to keep knowledge of user information between HTTP
           requests.

           Cookies or URL parameters ( for ex. like http://example.com/myPage?
           asd=lol&boo=no ) are both suitable ways to transport data between 2
           or more request. 
           
           However for most times, we don't want
           that data to be readable/editable on client side.

           The solution is to store that data server side, give it an "id", and
           let the client only know (and pass back at every http request) that
           id. There you go, sessions implemented. Or you can use the client as
           a convenient remote storage, but you would encrypt the data and keep
           the secret server-side.

           Of course there are other aspects to consider, like you don't want
           people to hijack other's sessions, you want sessions to not last
           forever but to expire, and so on.
        
           the user id (could be username or another
           unique ID in your user database) can be stored in the session data,
           server-side, after successful identification. Then for every HTTP
           request you get from the client, the session id (given by the
           client) will point you to the correct session data (stored by the
           server) that contains the authenticated user id - that way your code
           will know what user it is talking to, during the session.

                                   edited Oct 10 '15 at  answered Sep 27 '10 at

           

                 "you don't want that data to be maintained client side". Why
                 not? If you employ strong cryptography you can let the client
           1     keep hold of the session data encrypted and stored in a cookie.
                 This greatly simplifies scaling out to multiple nodes as the
                 servers don't need to 'remember' anything. – Matt Harrison Jan
                 30 '15 at 20:56


### another answer of the session

       "Session" is the term used to refer to a user's time browsing a web
       site. It's meant to represent the time between their first arrival at a
       page in the site until the time they stop using the site. In practice,
       it's impossible to know when the user is done with the site. In most
       servers there's a timeout that automatically ends a session unless
       another page is requested by the same user.

       The first time a user connects some kind of session ID is created (how
       it's done depends on the web server software and the type of
       authentication/login you're using on the site). Like cookies, this
       usually doesn't get sent in the URL anymore because it's a security
       problem. Instead it's stored along with a bunch of other stuff that
       collectively is also referred to as the session. Session variables are
       like cookies - they're name-value pairs sent along with a request for a
up     page, and returned with the page from the server - but their names are
vote   defined in a web standard.
15 
down   Some session variables are passed as HTTP headers. They're passed back
vote   and forth behind the scenes of every page browse so they don't show up
       in the browser and tell everybody something that may be private. Among
       them are the USER_AGENT, or type of browser requesting the page, the
       REFERRER or the page that linked to the page being requested, etc. Some
       web server software adds their own headers or transfer additional
       session data specific to the server software. But the standard ones are
       pretty well documented.

       Hope that helps.

                                 answered Sep 27 '10 at 14:18
                                                             
       share|improve this answer                        [059]
                                                   Tim Rourke
                                                      3563515

       
            I know on the IIS servers I use I can get the user name from a
            USER_NAME header, but that may be IIS-specific. – Tim Rourke Sep 27
            '10 at 15:36
            What does the REFERRER means here? – Gab Aug 13 '15 at 12:00

       add a comment |   

       Ok, not sure how this question belong to SO. But to be short. HTTP is
       stateless connection protocol, hence server cannot differentiate between
       different connections of different users. Hence comes cookie, once
       client connects first time to server, server generated new session id,
       which later will be send to client as cookie value. And from now on this
       session id will identify clients connection, because within each HTTP
up     request it will see appropriate session id inside cookies. Now for each
vote 6 session id, server keeps some data structure, which enables him to store
down   data specific to user, this data structure you can abstractly call
vote   session.

                                 answered Sep 27 '10 at 13:35
                                                             
       share|improve this answer                        [3d1]
                                                 Artem Barger
                                                   20.9k83149

       
            Can you put some more light on this - "Now for each session id,
            server keeps some data structure, which enables him to store data
            specific to user, this data structure you can abstractly call
            session."? What specific client information does the server stores?
            – PK' Feb 27 '14 at 18:00
            Can you put some more light on this - "Now for each session id,
            server keeps some data structure, which enables him to store data
            specific to user, this data structure you can abstractly call
            session."? What specific client information does the server stores?
            – Gab Aug 13 '15 at 11:59

       add a comment |   


[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
 
draft saved
draft discarded
[                    ]

Sign up or log in

Sign up using Google

Sign up using Facebook

Sign up using Email and Password

[Submit]

Post as a guest

Name [                              ]
Email [                              ]

Post as a guest

Name [                              ]
Email [                              ]

[Post Your Answer] discard

By posting your answer, you agree to the privacy policy and terms of service.

Not the answer you're looking for? Browse other questions tagged 
language-agnostic session or ask your own question.

asked  5 years ago

viewed 67169 times

active 2 months ago

Blog
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 
Winter Bash 2015: Hats Off

 
Podcast #70 - David Was Wrong And Jason Was Right

Upcoming Events
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 
Take the Stack Overflow Developer Survey
ends Jan 21


Linked

 
2
Storing username, pasword using cookies/sessions - Java Servlets
 
1
How to crawl a website after login in it with username and password
 
0
express session mangement
 
0
How the server side does know that the client browser was closed and so the
session will be invalid?
 
0
Close div on all site pages when user clicks x
 
2
Log into a web site with out the use of a database
 
0
Session data is null while Using FileResult to return an image using mobile
 
0
Forwarding Client Authentication From LoginServer To GameServer Securely
 
0
Where should i store token on the client
 
2
Http protocol mechanisms and objects
see more linked questions…

Related

 
4519
What and where are the stack and heap?
 
1452
What is dependency injection?
 
827
What is your best programmer joke?
 
797
What are the lesser known but useful data structures?
 
617
How do I expire a PHP session after 30 minutes?
 
6
Preventing multiple browser sessions on the same server session
 
0
how does php's session work? what encryption method does it use
 
240
Do sessions really violate RESTfulness?
 
246
How to do authentication with a REST API right? (Browser + Native clients)
 
6
How do sessions and cookies work in Rails?

Hot Network Questions

  • 
    Ant Colony Simulator
  • 
    Why does the QCD vaccum have zero momentum?
  • 
    Proof for vectors involving cross and dot product
  • 
    Aiming at specific body parts
  • 
    How can I politely turn down the exit interview?
  • 
    How To Pump Up Car Tires
  • 
    Does OOP violate the single responsibility principle?
  • 
    Why won't my engine rotate?
  • 
    Why does reboot and poweroff require root privileges?
  • 
    Can an interstellar war be remunerative from an economic point of view?
  • 
    Travelling as an unmarried Western couple in Indonesia
  • 
    Why didn't Sauron signal the Orcs that Frodo and Sam were at Mount Doom?
  • 
    How would you have avoided the Miss Universe 2015 mistake?
  • 
    How do you go from Naboo to Tatooine without the hyperdrive?
  • 
    Direct voting on every issue (referendum) - new political system
  • 
    Why rotating engines in opposite directions is more important for a
    propeller-driven plane than in a jet?
  • 
    How are Stormtroopers uniquely identified in the field?
  • 
    Labelling Food for the Freezer
  • 
    Atbash Self Palindromes
  • 
    Color CV vs black and white CV
  • 
    How do rockets stream live video during launches?
  • 
    Three logicians walk out of the bar
  • 
    Why do traps have an attack bonus?
  • 
    Can the Jedi retire?

more hot questions
question feed
*
tour help blog chat data legal privacy policy work here advertising info mobile
contact us feedback

                      Technology                         Life / Arts      Culture /         Science         Other
                                                                          Recreation
                  1. Programmers                        1. Photography
                  2. Unix &                             2. Science      1. English
                     Linux                                 Fiction &       Language &    1. Mathematics
 1. Stack         3. Ask          1. Database              Fantasy         Usage         2. Cross
    Overflow         Different       Administrators     3. Graphic      2. Skeptics         Validated     1. Stack
 2. Server Fault     (Apple)      2. Drupal Answers        Design       3. Mi Yodeya        (stats)          Apps
 3. Super User    4. WordPress    3. SharePoint         4. Movies & TV     (Judaism)     3. Theoretical   2. Meta
 4. Web              Development  4. User Experience    5. Seasoned     4. Travel           Computer         Stack
    Applications  5. Geographic   5. Mathematica           Advice       5. Christianity     Science          Exchange
 5. Ask Ubuntu       Information  6. Salesforce            (cooking)    6. Arqade        4. Physics       3. Area 51
 6. Webmasters       Systems      7. ExpressionEngine®  6. Home            (gaming)      5. MathOverflow  4. Stack
 7. Game          6. Electrical      Answers               Improvement  7. Bicycles      6. Chemistry        Overflow
    Development      Engineering  8. more (13)          7. Personal     8. Role-playing  7. Biology          Careers
 8. TeX - LaTeX   7. Android                               Finance &       Games         8. more (5)
                     Enthusiasts                           Money        9. more (21)
                  8. Information                        8. Academia
                     Security                           9. more (9)

site design / logo © 2016 Stack Exchange Inc; user contributions licensed under
cc by-sa 3.0 with attribution required
rev 2016.1.7.3152
Stack Overflow works best with JavaScript enabled[p-c1rF4kxg]


# 2



Why say that HTTP is a stateless protocol?

           HTTP has HTTP Cookies. Cookies allow the server to track the user
           state, number of connections, last connection, etc.

           HTTP has persistent connections (Keep-Alive), several requests can
           be send in same TCP Connection.
          

           
               Another area where I don't see "stateless-ness" is in
               Authorization - particularly Proxy-Authorization. It seems that
               it is stateful during the negotiation. For NTLM Authentication,
               the client needs to remember the type of Proxy-Authentication
               and the server needs to be stateful since there is a sequence to
               the NTLM Message Types. So I'm not sure I understand the
               answers. – Lindsay Morsillo Aug 1 '13 at 18:34



active oldest votes

            Even though multiple requests can be sent over the same HTTP
            connection, the server does not attach any special meaning to their
            arriving over the same socket. That is solely a performance thing,
            intended to minimize the time/bandwidth that'd otherwise be spent
            reestablishing a connection for each request.

            As far as HTTP is concerned, they are all still separate requests
            and must contain enough information on their own to fulfill the
            request. That is the essence of "statelessness". Requests will not
            be associated with each other absent some shared info the server
            knows about, which in most cases is a session ID in a cookie.

                                                          answered Nov 2 '12 at
                                                                          17:24

            


            add a comment |   

       From Wikipedia:

           HTTP is a stateless protocol. A stateless protocol does not require
           the server to retain information or status about each user for the
           duration of multiple requests.

           But some web applications may have to track the user's progress from
           page to page, for example when a web server is required to customize
           the content of a web page for a user. Solutions for these cases
           include:

             □ the use of HTTP cookies.
             □ server side sessions,
up           □ hidden variables (when the current page contains a form), and
vote         □ URL-rewriting using URI-encoded parameters, e.g., /index.php?
28             session_id=some_unique_session_code.
down
vote   What makes the protocol stateless is that the server is not required to
       track state over multiple requests, not that it cannot do so if it wants
       to. This simplifies the contract between client and server, and in many
       cases (for instance serving up data over a CDN) minimizes the amount of
       data that needs to be transferred. If servers were required to maintain
       the state of clients' visits the structure of issuing and responding to
       requests would be more complex. As it is, the simplicity of the model is
       one of its greatest features.

                                 answered Nov 2 '12 at 17:53
                                                            
       share|improve this answer                       [f0a]
                                                     dimo414
                                                  14.7k55693

       


       add a comment |   

           Because a stateless protocol does not require the server to retain
           session information or status about each communications partner for
           the duration of multiple requests.

           HTTP is a stateless protocol, which means that the connection
           between the browser and the server is lost once the transaction
up vote 5  ends.
down vote
                                     answered Nov 2 '12 at 17:25
                                                                
           share|improve this answer                       [249]
                                                  Rahul Tripathi
                                                    84.8k1272149

           
                 But, HTTP can save information in server, using cookies. HTTP
                 wih keep-alive don't close connection on each request. – Jose
                 Nobile Nov 2 '12 at 17:29
           1     Check out this article:- ecst.csuchico.edu/~amk/foo/advjava/
                 notes/servlets/Cookies.html – Rahul Tripathi Nov 2 '12 at 17:31
           8     Saving information on server does not mean that the connection
                 is alive constantly. – srijan Nov 2 '12 at 17:32
                 @srijan Well, no. So? Nobody was claiming otherwise. – Mark
                 Amery Nov 2 '15 at 16:57

           add a comment |   

        HTTP is a connectionless and this is a direct result that HTTP is a
        stateless protocol. The server and client are aware of each other only
        during a current request. Afterwards, both of them forget about each
        other. Due to this nature of the protocol, neither the client nor the
        browser can retain information between different request across the web
up vote pages.
0 down
vote                              answered Apr 4 '14 at 6:29
                                                            
        share|improve this answer                      [3c0]
                                                 user3496740
                                                          91

        


        add a comment |   

        If protocol HTTP is given as State full protocol,browser window uses
        single connection to communicate with web server for multiple request
        given to web application.this gives chance to browser window to engage
        the connections between browser window and web servers for long time
        and to keep them in idle state for long time.This may create the
up vote situation of reaching to maximum connections of web server even though
-1 down most of the connections in clients are idle.
vote
                                  answered Jan 21 '14 at 5:56
                                                             
        share|improve this answer                       [af5]
                                             Rajasekhar reddy
                                                            1

        
             HTTP already have keep-alive, this mean that server doesn't close
             the connection, and client can makes many request on the same
             connection. – Jose Nobile Apr 4 '14 at 23:26

        add a comment |   

Your Answer

[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
[                                                                                            ]
 
draft saved
draft discarded
[                    ]

Sign up or log in

Sign up using Google

Sign up using Facebook

Sign up using Email and Password

[Submit]

Post as a guest

Name [                              ]
Email [                              ]

Post as a guest

Name [                              ]
Email [                              ]

[Post Your Answer] discard

By posting your answer, you agree to the privacy policy and terms of service.

Not the answer you're looking for? Browse other questions tagged http stateless
or ask your own question.

asked  3 years ago

viewed 41663 times

active 8 months ago

Blog
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 
Winter Bash 2015: Hats Off

 
Podcast #70 - David Was Wrong And Jason Was Right

Upcoming Events
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 
Take the Stack Overflow Developer Survey
ends Jan 21


Get the weekly newsletter!

  • Top questions and answers
  • Important announcements
  • Unanswered questions

[Sign up for the newsletter]

see an example newsletter

By subscribing, you agree to the privacy policy and terms of service.

Linked

 
0
Ajax send HTML data with post but $_POST empty
 
0
Pass data from routes.php to a controller in Laravel
 
1
Retain form field details
 
1
Saving data on server side using REST
 
0
How to run method in controller when user close browser in laravel 5
 
0
PHP waits for Javascript Call
 
1
Is there a way to alert/popup in a rails controller method without rendering
any other js file

Related

 
463
Custom HTTP headers : naming conventions
 
2
If HTTP is stateless why do I need to close a database connection?
 
1
What does it imply to call a web service (SOAP over HTTP) stateless?
 
0
HTTP persistent connection vs Stateless Web
 
246
How to do authentication with a REST API right? (Browser + Native clients)
 
0
Understanding PHP/CGI performance considering HTTP (stateless protocol)
 
46
How to do stateless (session-less) & cookie-less authentication?
 
0
Is Http Session contradicted with Http Stateless?
 
0
Stateless with cookie vs statefull
 
0
How to send larger amounts of data to a stateless RESTful retrieval service

Hot Network Questions

  • 
    Confused! Are there any differences between "I have to go", "I had to go",
    "I've had to go", "I get to go", "I got to go", "I've got to go"?
  • 
    Fear of incrimination by inaction
  • 
    Is there any reason why a spacecraft would not be able to turn around
    without a gravity assist?
  • 
    Why won't my engine rotate?
  • 
    Format a specific GeoJSON file into the correct format
  • 
    Clicking a Breadcrumb Link, Trigger Browser Back Button, or Forward?
  • 
    What does the position of the ON clause actually mean?
  • 
    Why does reboot and poweroff require root privileges?
  • 
    How can I politely turn down the exit interview?
  • 
    Check two arguments in Java, either both not null or both null elegantly
  • 
    Letters, Get Moving! Pt. 2
  • 
    Why isn't the wing span of an certain airliner longer with longer fuselage
    versions?
  • 
    Labelling Food for the Freezer
  • 
    Atbash Self Palindromes
  • 
    Does OOP violate the single responsibility principle?
  • 
    What was the flaw in Goblet of Fire?
  • 
    Why is overfitting bad?
  • 
    Superstitious hotel elevator
  • 
    Can you Stabilize while suffocating?
  • 
    How was Seven of Nine the seventh of nine people to be assimilated?
  • 
    Why rotating engines in opposite directions is more important for a
    propeller-driven plane than in a jet?
  • 
    Engineering difficulties towards near-perfect rockets?
  • 
    Why do traps have an attack bonus?
  • 
    Dispenser stops shooting items when full

more hot questions
question feed
*
tour help blog chat data legal privacy policy work here advertising info mobile
contact us feedback

                      Technology                         Life / Arts      Culture /         Science         Other
                                                                          Recreation
                  1. Programmers                        1. Photography
                  2. Unix &                             2. Science      1. English
                     Linux                                 Fiction &       Language &    1. Mathematics
 1. Stack         3. Ask          1. Database              Fantasy         Usage         2. Cross
    Overflow         Different       Administrators     3. Graphic      2. Skeptics         Validated     1. Stack
 2. Server Fault     (Apple)      2. Drupal Answers        Design       3. Mi Yodeya        (stats)          Apps
 3. Super User    4. WordPress    3. SharePoint         4. Movies & TV     (Judaism)     3. Theoretical   2. Meta
 4. Web              Development  4. User Experience    5. Seasoned     4. Travel           Computer         Stack
    Applications  5. Geographic   5. Mathematica           Advice       5. Christianity     Science          Exchange
 5. Ask Ubuntu       Information  6. Salesforce            (cooking)    6. Arqade        4. Physics       3. Area 51
 6. Webmasters       Systems      7. ExpressionEngine®  6. Home            (gaming)      5. MathOverflow  4. Stack
 7. Game          6. Electrical      Answers               Improvement  7. Bicycles      6. Chemistry        Overflow
    Development      Engineering  8. more (13)          7. Personal     8. Role-playing  7. Biology          Careers
 8. TeX - LaTeX   7. Android                               Finance &       Games         8. more (5)
                     Enthusiasts                           Money        9. more (21)
                  8. Information                        8. Academia
                     Security                           9. more (9)


<!--
    2016 0108
    vim: set ft=markdown tw=78:
-->
