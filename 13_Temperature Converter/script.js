

const textBox = document.getElementById("tempValue");
const toFahrenheit = document.getElementById("fahrenheitType");
const toCelcius = document.getElementById("celciusType");
const result = document.getElementById("result");

let temp;

function convert(){

    if(toFahrenheit.checked){
       
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " °F";

        //  °F -> type keyboard in alt + 0176
    }
    else if(toCelcius.checked){
        
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + " °C";
    }
    else{
        result.textContent = "Select the unit";
    }

}