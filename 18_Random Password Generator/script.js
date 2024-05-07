


function generatePassword(length, includeLowerCase, includeUpperCase, includeNumber, includeSymbols){
    
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolsChars = "!@#$%^&*()_+=|~";
   
    let allowChars = "";
    let password = "";

    allowChars += includeLowerCase ? lowerCaseChars : "";

    allowChars += includeUpperCase ? upperCaseChars : "";

    allowChars += includeNumber ? numberChars : "";

    allowChars += includeSymbols ? symbolsChars : "";

    if(length <= 0){
        return `(Password length must be at least 6)`
    }

    if(allowChars.length === 0){
        return `(At least 1 set of character needs to be selected)`
    }

    for(let i = 0; i < length; i++){

        const randomIndex = Math.floor(Math.random() * allowChars.length); 
        password += allowChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumber = true;
const includeSymbols = true;

password = generatePassword(passwordLength,
                includeLowerCase,
                includeUpperCase,
                includeNumber, 
                includeSymbols);

console.log(`Generated password : ${password}`);