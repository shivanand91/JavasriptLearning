const myText = document.querySelector(".age");
const reslut = document.querySelector(".result");
const showResult = document.querySelector(".showResult");

let age;


reslut.onclick = function () {


  age = myText.value;
  age = Number(age);
  
  if (age >= 100) {
      resultSction = `You are too old.`;
  } 
  else if(age == 0){
    resultSction = `you just born.`;
  }
  else if(age >= 18){
    resultSction = `You are ${age}+ (adult).`;
  }
  else if(age < 0){
    resultSction = `${age} is invalid age.`
  }
  else{
   resultSction = `please enter age.`
  }

  showResult.textContent = resultSction;
};
