let fruits = ["apple", "mango", "banana"];

// to add an element in given array
fruits.push("papaya");

// to delete an element in given array
fruits.pop();


// to add an element beginning of given array 
fruits.unshift("mango");


// to delete an element beginning of given array 
fruits.shift();
console.log(fruits);

// this is use for find the length of any array
numOfFruits = fruits.length;
console.log(numOfFruits);

// if the element not present in the array it gives the -1 index value
let index = fruits.indexOf("coconut");
console.log(index);

// if the element present in the array it gives the element index value
let index2 = fruits.indexOf("mango");
console.log(index2);


// to display the all the element of any array
for(let i = 0; i < fruits.length; i++){
     
    console.log(fruits[i]);
}


// to display the all the element of any array in reverse order
for(let i = fruits.length - 1; i >= 0 ; i--){
     
    console.log(fruits[i]);
}

// this is the another technique of display all the element of an array
for(let fruit of fruits){
    console.log(fruit);
}
