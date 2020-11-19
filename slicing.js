//The slice() method slices out a piece of an array into a new array.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
console.log(citrus);

//The slice() method can take two arguments like slice(1, 3).

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
//console.log(citrus);

//If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);
//onsole.log(citrus);