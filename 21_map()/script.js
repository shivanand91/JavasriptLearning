// .map() = accept a callback and applies that function 
//          to each element of an array, then return a new array

// <--------------------------------------------------------------------------------->
//                    different between .map() and forEach()
// <--------------------------------------------------------------------------------->

// .map() = this function can not be change the original Array
// forEach() = this function can change the original array
    
// <--------------------------------------------------------------------------------->

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(square);
const cubes = numbers.map(cube);
const forths = numbers.map(forth);

console.log(squares);
console.log(cubes);
console.log(forths);


function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

function forth(element){
    return Math.pow(element, 4);
}

// <--------------------------------------------------------------------------------->


const students = ["Shiva", "Abhi", "Rahul"];

const studentUpper = students.map(upperCase);
const studentLower = students.map(lowerCase);
const studentFirst = students.map(firstUpperCase);

console.log(studentUpper);
console.log(studentLower);
console.log(studentFirst);

function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}


function firstUpperCase(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
}



// <--------------------------------------------------------------------------------->

const dates = ["2024-1-10", "2026-3-12", "2027-4-6"];
const formateDate = dates.map(formateDates);

console.log(formateDate);


function formateDates(element){
    const parts = element.split("-");

    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}



