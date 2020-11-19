//The splice() method can be used to add new items to an array

//The first parameter (2) defines the position where new elements should be added (spliced in).

//The second parameter (0) defines how many elements should be removed.

//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(1, 0, "Lemon", "Kiwi");
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);

//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
//The first parameter (0) defines the position where new elements should be added (spliced in).
//The second parameter (1) defines how many elements should be removed.
//The rest of the parameters are omitted. No new elements will be added.
var names = ["Banana", "Orange", "Apple", "Mango"];
names.splice(0,2);
console.log(names);
