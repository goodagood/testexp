this.x = 9; 
var mod = {
      x: 81,
      getX: function() { return this.x; }
};

mod.getX(); // 81

var retrieveX = mod.getX;
retrieveX(); // 9, because in this case, "this" refers to the global object

// Create a new function with 'this' bound to mod
//New programmers (like myself) might confuse the global var getX with mod's property getX
var boundGetX = retrieveX.bind(mod);
boundGetX(); // 81



// part 2

function List() {
      return Array.prototype.slice.call(arguments);
}

var list1 = List(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = List.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]


// part 3
function LateBloomer() {
      this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
    setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
    console.log('I am a beautiful flower with ' +
            this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();  // after 1 second, triggers the 'declare' method
