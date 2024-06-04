// Rest Paramater = (...rest) allow a function work with a 
//                  variable number of argument by bundling
//                 then into a array

                //   spread = expands an array into seperate elements 
                //   rest = bundles seperate elements int an array

// function openFridge(...foods){
//     console.log(...foods);
// }

// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "hotdog";
// const food4 = "sushi";

// console.log(food1, food2, food3, food4);

// const foods = getFood(food1, food2, food3, food4);
// console.log(foods);


function sum(...numbers){
    let result = 0;

    for (let number of numbers) {
        result += number;        
    }

    return result;
}

function getAvegare(...numbers){
    let result = 0;

    for (let number of numbers) {
        result += number / numbers.length;        
    }

    return result;
}

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Shivanand", "Kumar");

console.log(fullName);

total = sum(1, 2, 3, 4, 5);
avgTotal = getAvegare(1, 2, 3, 4, 5);


console.log(`total sum of array is ${total}`);
console.log(`total average of array is ${avgTotal}`);