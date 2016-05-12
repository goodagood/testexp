
# http://www.clock.co.uk/blog/tools-for-unit-testing-and-quality-assurance-in-node-js

Unit Testing and Quality Assurance (QA) are two very important aspects of
writing good quality, maintainable code that does what you expect. Without
these, you really don't know if your application is going to instigate world
peace or start a war (metaphorically speaking).

Here at Clock, we use a variety of different tools to achieve our goal of
having well tested, quality code. I am going to give a quick overview of a
number of these tools, explain briefly why and how we use them and show you a
few tips and tricks along the way.

## Mocha

One of the first tools you need in your testing library is a good testing framework. We use Mocha exclusively at Clock. It is really simple to use and lets us keep our test files small and focused on one particular unit of code. Using the Behaviour-driven Development (BDD) interface of Mocha also makes our tests very readable and obvious to anyone as to what is being tested. A simple example of Mocha using the BDD interface would look like this:

describe('MyClass', function () {

  describe('addOne()', function () {

    it('should correctly add one to the given number', function () {
      // assertions here
    })

  })

  describe('subtractOne()', function () {

    it('should correctly subtract one from the given number', function () {
      // assertions here
    })

  })

})

As you can see, with the highly descriptive test names it's pretty obvious as to what is being tested and what the expected outcome should be.

TIP: Keep your test names descriptive and your files small and focused.
Should JS

The next tool you need is an assertion library. Our usual choice is Should JS. Should compliments Mocha with its BDD style interface which gives us the ability to string together very natural sounding function chains like this:

describe('Student', function () {

  var student = { classes: [ 'English', 'Maths', 'Science' ] }

  it('should have correct number of classes', function () {
    student.should.have.property('classes').with.lengthOf(3)
  })

})

TIP: Make sure you give your assertions a friendly description. There is nothing worse than seeing the following in your test output:

expected false to equal true

You can do this using Should by passing a second parameter to your assertion:

isUnique.should.equal(true, 'Value is not unique')

Sinon JS

When writing tests, it is extremely likely you are going to need to mock out the external dependencies of your system. In quite a lot of situations you can just use plain old Javascript Objects or simple functions as your mocks, however when it comes to mocking out more complex functionality, a mocking framework can really simplify things. One such mocking framework (and our usual choice at Clock) is Sinon JS.

Suppose we have a simple module that looks like this:

module.exports = function makeRequest(logger, callback) {

    request('http://www.google.com', function (error, xhr, response) { 
      logger('request made')
      callback(error, response)
    })

}

We need to make sure that our logger function was actually called. Sinon makes this really easy to test:

var sinon = require('sinon')
  , makeRequest = require('./makeRequest')

describe('makeRequest', function () {

  it('should log that a request was made', function (done) {

    var logger = sinon.spy()

    makeRequest(logger, function (error, response) {
      logger.calledOnce.should.equal(true, 'logger was not called')
    })

  })

})

This is a very simple use case for Sinon. The real power of Sinon comes in when we have slightly more complex logic. Suppose we have this module:

module.exports = function getUsers(userService) {

  var users = []

  for (var i = 0; i <= 3; i++) {
    var user = userService.get(i)
    users.push(user)
  }

  users.sort(function (a, b) {
    return a.name - b.name
  })

  return users

}

We can test this really easily like so:

var sinon = require('sinon')
  , userService = require('./userService')
  , getUsers = require('./getUsers')

describe('getUsers', function () {

  it('should return a list of users in alphabetical order', function (done) {

    var getUserStub = sinon.stub(userService, 'get')
    getUserStub.withArgs(0).returns({ name: 'Fred' })
    getUserStub.withArgs(1).returns({ name: 'Barney' })
    getUserStub.withArgs(2).returns({ name: 'Dave' })

    var users = getUsers(userService)
    users[0].name.should.equal('Barney')
    users[1].name.should.equal('Dave')
    users[2].name.should.equal('Fred')

  })

})

As you can see, Sinon makes mocking out these dependencies extremely simple!

TIP: Sinon is also really good at testing code that needs to happen after a certain amount of time has passed using its "Fake Timers". Check out the docs for more information.
Nock

Sometimes in your tests you need to mock the response from a HTTP request. Nock makes this really easy and does it in a completely unobtrusive manner.

If you have a function which makes a HTTP request like so:

var request = require('request')

module.exports = function makeRequest(callback) {
  request('http://www.google.com/', function (error, xhr, response) {
    callback(error, response)
  })
}

You can use Nock to mock the response from the request in your test like this:

var makeRequest = require('./makeRequest')

describe('makeRequest', function () {

  it('should return the correct response', function (done) {

    nock('http://www.google.com')
      .get('/')
      .reply(200, 'Hello from Google!')

    makeRequest(function (error, response) {
      response.should.equal('Hello from Google!')
      done()
    })

  })

})

TIP: You can assign the response from the nock function call to a variable and then call the done() method to assert that your HTTP request was actually made:

var nockResponse = nock(...)
nockResponse.done() // This will throw an assertion error if your request was not made

Supertest

Need to test a HTTP server? Supertest is your friend! It makes testing HTTP servers and Express applications super easy.

var request = require('supertest')

describe('MyApi', function () {

  it('should return 200 on /', function (done) {

    request('http://localhost:3000')
      .get('/')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err)
        done()
      })

  })

})

TIP: Instead of passing in a URL to the request object, pass in your Express instance to easily test your endpoints without having to have your application running separately.
Rewire

Rewire is a dependency injector which has been designed to modify the behaviour of a module such that you can easily inject mocks and manipulate private variables. This might sound like quite a powerful and potentially dangerous tool, and it is, however it can be very useful when you have code that looks something like this:

var fs = require('fs')

module.exports = function doesFileExist(callback) {

    fs.exists('/tmp/myfile', function (error, exists) {
        if (exists) {
            callback(error, true)
        } else {
            callback(error, false)
        }
    }) 

}

To test this module, and its two possible paths of execution, you could create a test that sets up some fixtures where the file exists, and then have a test that actually tests the file system, and then setup another test where the file doesn't exist to test the other path, or you could use Rewire:

var rewire = require('rewire')
  , doesFileExist = rewire('./doesFileExist')

describe('doesFileExist', function () {

  it('should return true when file exists', function () {

    doesFileExist.__set__(
      { fs: 
        { exists: function (path, callback) {
            callback(null, true)
          }
        }
      }
    )

    doesFileExist(function (error, exists) {
      exists.should.equal(true, 'file does not exist')
    })

  })

  it('should return false when the file does not exist', function () {

    doesFileExist.__set__(
      { fs: 
        { exists: function (path, callback) {
            callback(null, false)
          }
        }
      }
    )

    doesFileExist(function (error, exists) {
      exists.should.equal(false, 'files exists')
    })

  })

})

Now obviously this is a very contrived example, but it illustrates the point quite well. We just override the fs module within our module under test and pass in a mocked exists function, negating the need for us to actually mess with the file system at all.

TIP: Rewire comes in to its own when you need to test the entry point of your application, where you can't pass in mocks any other way.
Istanbul

Having tests is all well and good, however knowing how much of your codebase is covered by your tests is even better. Istanbul does a great job of providing this information, it reports on line coverage, statement coverage, function coverage and the most important metric, branch coverage. I wont go into any more detail on Istanbul, as this blog post should cover everything you need to know.

TIP: Make sure you take note of the coverage report and the branch coverage metric in particular.
JSHint

Every good Javascript developer should already be aware of JSHint. It is a Static Code analysis tool that helps detect errors and potential problems with your code. This tool is vital for QA on our projects here at Clock, and also keeps us sane as a developer, helping spot those little syntax errors in our code whilst we are writing it, not when we come to run it.

Check out this .jshintrc file for an example of the config / rules we use on our projects.
JSCS

JSCS or Javascript Code Style Checker, is another Static Code Analysis tool that works in a very similar manner to JSHint. However, whereas JSHint is fairly non-opinionated and it mostly checking for syntax errors and general programming bad practices, JSCS allows you to be highly opinionated and set a series of coding standards that have to be adhered to across your project. For example, it allows you to dictate that comma first must be used, a new line must exist at the end of your files and that combining your var declarations is a must. It is also highly customisable in that you can create your own rules if you so choose.

Check out this .jscsrc file for an example of the config / rules we use on our projects.
Putting it all together

So now that we have all these tools, we need a way to run them all. This really couldn't be simpler with Node. We just use NPM as our test runner!

Using the scripts directive inside our package JSON, we can configure how all these tools get executed and in what order. A typical scripts directive inside the package JSON on any Clock project looks something similar to this:

"scripts": {
  "lint": "./node_modules/.bin/jshint . --reporter=./node_modules/jshint-full-path/index.js",
  "checkStyle": "./node_modules/.bin/jscs .",
  "pretest": "npm run-script lint && npm run-script checkStyle",
  "test": "./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --recursive -R spec -r should",
  "posttest": "./node_modules/.bin/istanbul check-coverage && rm -rf coverage"
}

So now, whenever we want to run all the tests and QA processes on our project we just run:

npm test

Simple really!
Continuous Integration

Having all of these tools to write your tests and make sure your coding standards are followed is great, but they are useless if they never get run (and lets face it, its very easy to forget to run these after a quick change). This is why we use Continuous Integration in the form of Strider to ensure that after every commit our tests and QA processes get executed to ensure that nothing has broken and everything conforms to our coding standards.
Conclusion

So there we have it, I hope this gives you an idea of some of the tools you can use when building your own Node applications to help make sure you are instigating world peace and not starting a war.

By Adam Duncan

29 April 2014 in Tech


<!--
   vim: set ft=markdown:
-->
