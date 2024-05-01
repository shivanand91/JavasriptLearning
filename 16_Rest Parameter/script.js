// Rest Paramater = (...rest) allow a function work with a 
//                  variable number of argument by bundling
//                 then into a array

                //   spread = expands an array into seperate elements 
                //   rest = bundles seperate elements int an array

function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "hotdog";
const food4 = "sushi";

console.log(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4);
console.log(foods);