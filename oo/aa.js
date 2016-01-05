

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
Student.prototype = Object.create(Person.prototype);

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

/*
   Regarding the Student.prototype = Object.create(Person.prototype); line: 
   On older JavaScript engines without Object.create , one can either use a
   "polyfill" (aka "shim", see the linked article), or one can use a function that
   achieves the same result, such as:
*/

function createObject(proto) {
    function to_create_object_for_old_js_version() { }
    to_create_object_for_old_js_version.prototype = proto;
    return new to_create_object_for_old_js_version();
}

// Usage:
//Student.prototype = createObject(Person.prototype);
