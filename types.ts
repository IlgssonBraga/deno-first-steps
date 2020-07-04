// implicit types

// If we don't inform the type, typescript assume a implicity type
// according to the past value
let number = 12;

// number = 'aa'; // Error: Type '"aa"' is not assignable to type 'number'
number = 7;

console.log(number);

// Explicit types

let age: number;

// age = 'Oi'; // Error: Type '"Oi"' is not assignable to type 'number'

age = 25;

console.log(age);


