// Variable Scope = where a variable is recognized and 
//                  accessible (local vs global)
//  local = any variable declares inside a function or curli bracket is called local
//  global = any variable declares outside all of the functions or curli bracket is called global

// global variable
let x = 1;
console.log(x);

// local variable

function function1(){
    let x = 1;
    console.log(x);
}
function function2(){
    let x = 1;
    console.log(x);
}
function function3(){
    let x = 1;
    console.log(x);
}
function function4(){
    let x = 1;
    console.log(x);
}

function1();
function2();
function3();
function4();