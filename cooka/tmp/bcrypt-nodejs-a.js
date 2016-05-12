var bcrypt = require("bcrypt-nodejs");

var hash = bcrypt.hashSync("bacon");
 
//bcrypt.compareSync("bacon", hash); // true
//bcrypt.compareSync("veggies", hash); // false

console.log(bcrypt.compareSync("bacon", hash)); // true
console.log(bcrypt.compareSync("veggies", hash)); // false
