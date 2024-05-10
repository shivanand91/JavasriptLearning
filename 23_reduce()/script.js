// .reduce() = reduce the elements of an array to a single value 

// <-------------------------------------------------------------------------------->
        //   reduce the value of 1 by addition of all element of prices array 
// <-------------------------------------------------------------------------------->

const prices = [10, 39, 59, 29, 23, 64, 45];

const total = prices.reduce(sum);

console.log(total.toFixed(2));


function sum(previous, next){
    
    return previous + next;
}
// <-------------------------------------------------------------------------------->

// <-------------------------------------------------------------------------------->

const grades =  [75, 44, 60, 87, 90];

maxNums = grades.reduce(getMax);
minNums = grades.reduce(getMin);

console.log(maxNums);
console.log(minNums);



function getMax(previous, next){
    return Math.max(previous, next);
}

function getMin(previous, next){
    return Math.min(previous, next);
}

// <-------------------------------------------------------------------------------->