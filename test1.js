let subtraction = function(){
let a = 5;
let b = 6;
let sub = a - b;
return sub;

}


console.log(subtraction());

// let multiplication = ()=>{
//     let a = 5;
//     let b = 6;
//     let mul = a * b;
//     return mul;

// }

// console.log(multiplication());

function addition (num1,num2){
    let a = num1;
    let b = num2
    let sum = a + b;
    return sum;

}

console.log(addition(100,20));

function sayName(name){
    console.log(name);
}

sayName('Precious');

// let num2 = 13
// function multiplication (num1, num2 ){
//     let a = num1;
//     let b = num2;
//     let mul = a * b;
//     return mul;
// }
// console.log(multiplication(13,13);


// const number = parseInt(prompt('6: '));
// for(let i = 1; i <= 12; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${12} * ${2} = ${result}`);
// }

function calTimeTable(j){

    for( i = 0;   i <= 12; i++){

        let num1 = j;
        let num2 = i;
        let result = j * i;
         console.log(result);
         return result;
    }
}
calTimeTable(20);
calTimeTable(10);