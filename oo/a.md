
JavaScript Object-oriented programming, inheritance

What is we don't want to use 'this' and 'prototype'

'this' is kind of variable, it can be changed, it isn't supposed to keep as
constant.  Here we want to find a way not using 'this'.  Not as seriously as
normal programmers, we are just trying it for fun.

Yes, I know some one would talk about `polymorphism`, if they are good enough.
But, it's another topic, we are not going to talk it here.

# Referrences
    
    James Shore
        http://www.objectplayground.com/

    MDN
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

    node.js, API: events, util
        https://nodejs.org/en/

    google javascript object inherit

    My codes, a.js aa.js, ab.js abb.js
        https://github.com/goodagood/testexp

# oo 

JavaScript features powerful flexible OOP capabilities. 

Object-oriented programming (OOP) is a programming paradigm that uses
abstraction to create models based on the real world. OOP uses several
techniques from previously established paradigms, including modularity,
polymorphism, and encapsulation. Today, many popular programming languages
(such as Java, JavaScript, C#, C++, Python, PHP, Ruby and Objective-C) support
OOP.

Inheritance

Inheritance is a way to create a class as a specialized version of one or more
classes (JavaScript only supports single inheritance). The specialized class
is commonly called the child, and the other class is commonly called the
parent. In JavaScript you do this by assigning an instance of the parent class
to the child class, and then specializing it. In modern browsers you can also
use Object.create to implement inheritance.

Note: JavaScript does not detect the child class prototype.constructor (see
Object.prototype), so we must state that manually. See the question "Why is it
necessary to set the prototype constructor?" on Stackoverflow.

## Example from MDN

In the example below, we define the class Student as a child class of Person.
Then we redefine the sayHello() method and add the sayGoodBye() method.

    // Define the Person constructor
    var Person = function(firstName) {
      this.firstName = firstName;
    };

    // Add a couple of methods to Person.prototype
    Person.prototype.walk = function(){
      console.log("I am walking!");
    };

    Person.prototype.sayHello = function(){
      console.log("Hello, I'm " + this.firstName);
    };

    // Define the Student constructor
    function Student(firstName, subject) {
      // Call the parent constructor, making sure (using Function#call)
      // that "this" is set correctly during the call
      Person.call(this, firstName);

      // Initialize our Student-specific properties
      this.subject = subject;
    }

    // Create a Student.prototype object that inherits from Person.prototype.
    // Note: A common error here is to use "new Person()" to create the
    // Student.prototype. That's incorrect for several reasons, not least
    // that we don't have anything to give Person for the "firstName"
    // argument. The correct place to call Person is above, where we call
    // it from Student.
    Student.prototype = Object.create(Person.prototype); // See note below

    // Set the "constructor" property to refer to Student
    Student.prototype.constructor = Student;

    // Replace the "sayHello" method
    Student.prototype.sayHello = function(){
      console.log("Hello, I'm " + this.firstName + ". I'm studying "
                  + this.subject + ".");
    };

    // Add a "sayGoodBye" method
    Student.prototype.sayGoodBye = function(){
      console.log("Goodbye!");
    };

    // Example usage:
    var student1 = new Student("Janet", "Applied Physics");
    student1.sayHello();   // "Hello, I'm Janet. I'm studying Applied Physics."
    student1.walk();       // "I am walking!"
    student1.sayGoodBye(); // "Goodbye!"

    // Check that instanceof works correctly
    console.log(student1 instanceof Person);  // true
    console.log(student1 instanceof Student); // true

Regarding the Student.prototype = Object.create(Person.prototype); line: On
older JavaScript engines without Object.create , one can either use a
"polyfill" (aka "shim", see the linked article), or one can use a function
that achieves the same result, such as:

    function createObject(proto) {
        function ctor() { }
        ctor.prototype = proto;
        return new ctor();
    }

    // Usage:
    Student.prototype = createObject(Person.prototype);

Note: See Object.create for more on what it does, and a shim for older engines.

Making sure that this points to the right thing regardless of how the object
is instantiated can be difficult. However, there is a simple idiom to make
this easier.

    var Person = function(firstName) {
      if (this instanceof Person) {
        this.firstName = firstName;
      } else {
        return new Person(firstName);
      }
    }

### How we make it without `this` and `util.inherits`

    a.js  // compare to aa.js

## Example from node.js 

    var util = require("util");
    util.inherits(constructor, superConstructor);

Inherit the prototype methods from one constructor into another. The prototype
of constructor will be set to a new object created from superConstructor.

As an additional convenience, superConstructor will be accessible through the
`constructor.super_` property.

    var util = require("util");
    var EventEmitter = require("events");

    function MyStream() {
        EventEmitter.call(this);
    }

    util.inherits(MyStream, EventEmitter);

    MyStream.prototype.write = function(data) {
        this.emit("data", data);
    }

    var stream = new MyStream();

    console.log(stream instanceof EventEmitter); // true
    console.log(MyStream.super_ === EventEmitter); // true

    stream.on("data", function(data) {
        console.log('Received data: "' + data + '"');
    })
    stream.write("It works!"); // Received data: "It works!"

### How we make it without `this`, `prototype` and `util.inherits`

    abb.js  // compare to ab.js

# end
    
We did 4 examples, 2 by 2.  We comapred ways of oop with and without 'this'
'prototype', 'Object.create', 'util.inherits'.

Just for fun, and so.
Thank you for watching.

<!--
    2016 0105
    vim: set ft=markdown tw=78:
-->
