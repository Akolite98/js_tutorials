
// DON'T DO THIS
// var myVariables = 'I am at the gloal scope';

// THIS EITHER
// var myFunction = function() {

// }

function one(){
    return 'one';
}

//let value = one();
//console.log(value);
//console.log(one());

let value = one;
// console.log(typeof value);
//console.log(typeof one);
console.log(value ());

// String
// Number
// Boolean
// undefined
// function

function two (){
    return function (){
        console.log('two');
    }
}

 let myFunction = two();
 myFunction();

 function three (){

    return function(){
        return 'three';
    }
 }
 console.log(three ()());

