// age = parseInt(document.querySelector(".age").value);
// reslut = document.querySelector(".result");
// showResult = document.querySelector(".showResult");

// let resultSction;

// if (age < 18) {
//     resultSction = `You are an adult`;
// } else {
//   resultSction = `you are a child`;
// }

// reslut.onclick = function () {
//   showResult.textContent = resultSction;
// };


age = parseInt(document.querySelector(".age").value);
result = document.querySelector(".result");
showResult = document.querySelector(".showResult");

let resultSection; // Corrected typo (Section -> Section)

if (age < 18) {
  resultSection = "You are a minor";
} else {
  resultSection = "You are an adult";
}

// Check if elements exist before using them
if (result && showResult) {
  result.onclick = function() {
    showResult.textContent = resultSection;
  };
} else {
  console.error("Error: Required elements not found!");
}
