// arrow function = a concise way to write function expressions 
                    //  good for simple functions that you use only once 
                    //  (paramaters) => some code 

// <<<------------------------------------------------------------------------------------------------------->>>
        //    print hello name and age by using arrow function 
// <<<------------------------------------------------------------------------------------------------------->>>

const hello = (name, age) => {
                             console.log(`Hello ${name}`)
                             console.log(`you are ${age} years old.`);;
}

hello("Shivanand", 25);

// <<<------------------------------------------------------------------------------------------------------->>>
        //    print hello through setTimeout 
// <<<------------------------------------------------------------------------------------------------------->>>

setTimeout(function Hello(){
    console.log("Hello");
}, 3000);

// <<<------------------------------------------------------------------------------------------------------->>>
        //    print hello through arrow function 
// <<<------------------------------------------------------------------------------------------------------->>>
setTimeout(() => console.log("Hello"), 5000);

// <<<------------------------------------------------------------------------------------------------------->>>
        //    find square of elements of given array 
// <<<------------------------------------------------------------------------------------------------------->>>

const numbers = [2, 3, 5, 4, 6, 1, 8, 9];
const squares = numbers.map((element) => Math.pow(element, 2));
const cube = numbers.map((element) => Math.pow(element, 3));
console.log(squares);
console.log(cube);


// <<<------------------------------------------------------------------------------------------------------->>>
            // check elements of an array is odd or even 
// <<<------------------------------------------------------------------------------------------------------->>>

const isEven = numbers.filter((element) =>  element % 2 === 0);
const isodd = numbers.filter((element) =>  element % 2 !== 0);
console.log(isEven);
console.log(isodd);
// <<<------------------------------------------------------------------------------------------------------->>>
            //  find the total by using arrow function 
// <<<------------------------------------------------------------------------------------------------------->>>

const total = numbers.reduce((previous, next) => previous + next);
console.log(total);

// <<<------------------------------------------------------------------------------------------------------->>>