// Spread Operator = ... allows an iterable as an array or string 
//                       to be expanded into seperate elements 
//                       (unpack the elements)

// let numbers = [1, 2, 3, 4, 5, 7];

// let maximun = Math.max(...numbers);

// console.log(maximun);


// let username = "Shivanand Kumar";

// let letters = [...username].join("_");

// console.log(letters);


let fruits = ["apple", "mango", "banana"];

let newFruits = [...fruits];
let newFruits1 = [...fruits].join("-");

console.log(newFruits);
console.log(newFruits1);