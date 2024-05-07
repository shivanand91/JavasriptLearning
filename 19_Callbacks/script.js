
// callbacks = a function that is passed as an argument to another function.
            
//             used to handle asynchoronous operations :
//             1. Reading a File
//             2. Networking requests
//             3. Intracting with database

//             'Hey, you are done, call this next.'

const Hello = document.getElementById("hello");
const Goodbye = document.getElementById("goodbye");
const sum = document.getElementById("sum");

// <----------------------------------------------------------------------->
//                         this is the simple method
// <----------------------------------------------------------------------->

// hello();
// goodbye();

// function hello(){
    
//     setTimeout(function (){

//         console.log("Hello");
//         Hello.textContent = `Hello`;
//     }, 3000)
// }
    
// function goodbye(){

//     setTimeout(function (){
        
//         console.log("Good Bye!");
//         Goodbye.textContent = `Goodbye!`
//     }, 6000)
// }

// <----------------------------------------------------------------------->
//this is the callbacks method without passing any argument except callbacks
// <----------------------------------------------------------------------->

// hello(goodbye);
// hello(sumOfTwo);

// function hello(callbacks){
    
    //         console.log("Hello");
    //         Hello.textContent = `Hello`;
    //         callbacks();
    // }
    
    // function sumOfTwo(callbacks){
        //     let a = 4;
        //     let b = 5;
        //     sum.textContent = `Sum of ${a} and ${b} is: ${a + b}`;
        //     callbacks();
        // }
        
        // function goodbye(){
            
            //         console.log("Good Bye!");
            //         Goodbye.textContent = `Goodbye!`
            // }

 //<----------------------------------------------------------------------->
//          this is the callbacks method where some argument is passed
 //<----------------------------------------------------------------------->

 sumOfTwo(Display, 5, 6);
 Hello(Display);

 function sumOfTwo(callbacks, x, y){

    let result = x + y;
    callbacks(result);
 }

 function Display(result){
    sum.textContent = `sum of two number is: ${result}`;
 }
            
            