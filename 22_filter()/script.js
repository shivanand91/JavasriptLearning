
// .filter() = creates a new array by filtering out 
//              of elements 

// <---------------------------------------------------------------------------------->
            //    fliter which number is even and odd
// <---------------------------------------------------------------------------------->
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const evenNums = numbers.filter(isEven);
const oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);


function isEven(element){
    
    return element % 2 == 0;
}

function isOdd(element){
    return element % 2 != 0;
}


// <---------------------------------------------------------------------------------->
            //  filter 18 and 18+ age
// <---------------------------------------------------------------------------------->

  const age = [12, 13, 15, 18, 20, 22, 28, 30, 35, 40];
  const adultAge = age.filter(isAdult);

  console.log(adultAge);

  function isAdult(element){

    return element >= 18;

  }

// <---------------------------------------------------------------------------------->
        // check the less than six characters words
// <---------------------------------------------------------------------------------->

const fruits = ["apple", "banana", "mango", "lichhi", "guava"];

const shortWords = fruits.filter(getShortWords);

console.log(shortWords);


function getShortWords(element){
    return element.length >= 6;
}


// <---------------------------------------------------------------------------------->

