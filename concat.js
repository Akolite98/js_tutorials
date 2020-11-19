//The concat() method creates a new array by merging (concatenating) existing arrays:

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
console.log(myChildren);

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

//The concat() method can also take strings as arguments:

var arr1 = ["Emil", "Tobias", "Linus"];
var myChildren = arr1.concat("Peter"); 

console.log(myChildren);