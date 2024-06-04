
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");
const roll = document.querySelector(".roll");

const min = 1;
const max = 6; 

let randomNumber1;
let randomNumber2;
let randomNumber3;

roll.onclick = function(){

    randomNumber1 = Math.floor(Math.random() * max) + min;
    randomNumber2 = Math.floor(Math.random() * max) + min;
    randomNumber3 = Math.floor(Math.random() * max) + min;

    result1.textContent = randomNumber1;
    result2.textContent = randomNumber2;
    result3.textContent = randomNumber3;
}   