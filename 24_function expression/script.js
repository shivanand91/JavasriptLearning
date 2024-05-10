// function declaration = define a reusable block of codes that performs a specific work

function hello() {
  console.log("Hello by using function");
}

hello();

// function expression = a way to define functions as values or variable

// <<<------------------------------------------------------------------------------->>>
//                            hello print in 3 Sec
// <<<------------------------------------------------------------------------------->>>

const Hello = function () {
  console.log("Hello by using function expression in 3sec");
};

// Hello();
setTimeout(Hello, 3000);

// <<<------------------------------------------------------------------------------->>>
//                            hello print in 5 sec
// <<<------------------------------------------------------------------------------->>>

setTimeout(function () {
  console.log("Hello print in 5sec");
}, 5000);

// <<<------------------------------------------------------------------------------->>>
            // find square of an array by using function declaration
// <<<------------------------------------------------------------------------------->>>

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}

// <<<------------------------------------------------------------------------------->>>
            //  find square of an array by using function expression 
// <<<------------------------------------------------------------------------------->>>
const squareNum = numbers.map(function(element){
    
    return Math.pow(element, 2);
    
});

console.log(squareNum);


// <<<------------------------------------------------------------------------------->>>
            //  find cube of an array by using function expression 
// <<<------------------------------------------------------------------------------->>>

const cube = numbers.map(function(element){
    
    return Math.pow(element, 3);
    
});

console.log(cube);

// <<<------------------------------------------------------------------------------->>>
            //  find even number of an array by using function expression 
// <<<------------------------------------------------------------------------------->>>
const evenNum = numbers.filter(function(element){
    return element % 2 == 0;
})
console.log(evenNum);

// <<<------------------------------------------------------------------------------->>>
            //  find odd number of an array by using function expression 
// <<<------------------------------------------------------------------------------->>>
const oddNum = numbers.filter(function(element){
    return element % 2 != 0;
});

console.log(oddNum);