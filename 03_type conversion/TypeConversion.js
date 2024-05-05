let a = "Shivanand";
let b = 12433;
let c = true

// let x = "shivanand";
// let y = "shivanand";
// let z = "shivanand";

// x = String(x);
// y = int(y);
// z = Boolean(z);


// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);


const inputValue = document.getElementById("inputValue").value;
newValue = Number(inputValue);
console.log(newValue);
const mySubmit = document.getElementById("mySubmit");
const myResult = document.getElementById("myResult");

function check(){
        myResult.textContent = `input value is ${typeof inputValue}`
        myResult.textContent = `input value is ${typeof newValue}`
      
}