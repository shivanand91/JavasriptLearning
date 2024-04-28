
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");
const result4 = document.querySelector(".result4");
const mySubmit = document.querySelector(".mySubmit");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        result1.textContent = `you are subsribed.`
    }
    else{

        result1.textContent = `you are not subscribed.`
    }


    if(visaBtn.checked){
        result2.textContent = `you are select the visa.`
    }
    else{

        result2.textContent = `you are not select the visa.`
    }


    if(mastercardBtn.checked){
        result3.textContent = `you are selected the mastercard.`
    }
    else{

        result3.textContent = `you are not select the master card.`
    }


    if(payPalBtn.checked){
        result4.textContent = `you are select the pay pal.`
    }
    else{

        result4.textContent = `you are not select the pay pal.`
    }
}
