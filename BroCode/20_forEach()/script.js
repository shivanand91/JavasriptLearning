
// forEach() = method used to iterate over the elements 
//             of an array and apply a specified function
//             (callback) to each elements

//             array.forEach(callback)

// <------------------------------------------------------------------------------------>

// let numbers = [1, 2, 3, 5, 4, 6];

// let sqrNumber = [3, 4, 5, 6];


// numbers.forEach(double);
// numbers.forEach(display);


// sqrNumber.forEach(squrae);
// sqrNumber.forEach(display);


// function display(element){
//     console.log(element);
// }


// function double(element, index, array){
//     array[index] = element * 2;
// }

// function squrae(element, index, array){
//     array[index] = Math.pow(element, 2);
// }

// <------------------------------------------------------------------------------------>


let fruits = ["apple", "mango", "banana"];

// fruits.forEach(toUpperCase);
// fruits.forEach(toLowerCase);
fruits.forEach(toUpperfirstCase);
fruits.forEach(display);

function display(element){
    console.log(element);
    
}

// function toUpperCase(element, index, array){
    //       array[index] = element.toUpperCase();
    // }
    
    // function toLowerCase(element, index, array){
        //       array[index] = element.toLowerCase();
        // }
        
        function toUpperfirstCase(element, index, array){
            array[index] = element.charAt(0).toUpperCase() + element.slice(1);
        }
        
        
// <------------------------------------------------------------------------------------>
