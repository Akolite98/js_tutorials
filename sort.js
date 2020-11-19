//The sort() method sorts an array alphabetically:


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); 
console.log(fruits);

//The reverse() method reverses the elements in an array.
//You can use it to sort an array in descending order:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // First sort the elements of fruits
fruits.reverse();
console.log(fruits);

//provide a sort compare function to sort numbers

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points);
