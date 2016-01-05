

function new_person(firstName){
    var firstName = firstName || 'give me a firstName';

    return {
        walk : function(){
            console.log("I am walking!");
        },

        sayHello : function(){
            console.log("Hello, I'm " + firstName);
        },

    };
}


function new_student(firstName, subject){
    var firstName = firstName || 'give me a firstName';
    var subject   = subject || 'give me a subject';

    var person    = new_person(firstName);

    //var student = u.defaults({}, person);
    var student   = person; // this is not necessary

    student.give_me_person_obj = function(){ return person; };

    // Yes, this erase the old sayHello totally,
    // but do you really need it?
    // By doing this, we get rid of 'this' and 'prototype'.
    student.sayHello = function(){
        console.log("Hello, I'm " + firstName + 
                ". I'm studying " + subject + ".");
    };

    // Add a "sayGoodBye" method
    student.sayGoodBye = function(){
        console.log("Goodbye!");
    };

    return student;
}


// again we didn't use 'this', 'prototype', 
// and we make most of it.


// Create a Student.prototype object that inherits from Person.prototype.
// Note: A common error here is to use "new Person()" to create the
// Student.prototype. That's incorrect for several reasons, not least
// that we don't have anything to give Person for the "firstName"
// argument. The correct place to call Person is above, where we call
// it from Student.
// Student.prototype = Object.create(Person.prototype); // See note below

// Set the "constructor" property to refer to Student
// Student.prototype.constructor = Student;



// Example usage:
// var student1 = new Student("Janet", "Applied Physics");

var student1 = new_student("Janet", "Applied Physics");
student1.sayHello();   // "Hello, I'm Janet. I'm studying Applied Physics."
student1.walk();       // "I am walking!"
student1.sayGoodBye(); // "Goodbye!"

// Check that instanceof works correctly
//console.log(student1 instanceof Person);
//console.log(student1 instanceof Student);

