function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}`);
    console.log("Happy Birthday to you!");
    console.log(`you are ${age} years old!`);
}

function addTwoNumber(a, b){
    return a + b;
}

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}


console.log(isValidEmail("shiva@gmail.com"));
console.log(addTwoNumber(2, 4));
happyBirthday("Shivanand", 21);
happyBirthday("Pintu Bhaiya", 21);