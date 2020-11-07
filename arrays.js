let a = [ 12, 5, 6, 8, 10, 12];
let b = [ 'eddie', 'daniel','victor', 'alex'];

// console.log(a[0]);
// console.log(a[1]);
// console.log(a);

a[0] = 7;
console.log(a);
console.log(typeof a);

let c = [4, 'alex', true];
console.log(c);

//undefined
console.log(b[4]);

console.log(a.length); //actual number and not using 0 base

a[10] = 77;
console.log(a);
console.log(a.length);

a.push(77);
console.log(a);
console.log(a.length);

a.pop(); // used to remove elements from an array
a.pop();
a.pop();
console.log(a);
console.log(a.length);