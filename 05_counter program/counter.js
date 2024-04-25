let counter = 0;

document.getElementById("decrease").onclick = function(){

    counter--;

    document.getElementById("result").textContent = counter;
}
document.getElementById("Increase").onclick = function(){

    counter++;

    document.getElementById("result").textContent = counter;
}
document.getElementById("reset").onclick = function(){
    counter = 0;
    document.getElementById("result").textContent = counter;
}