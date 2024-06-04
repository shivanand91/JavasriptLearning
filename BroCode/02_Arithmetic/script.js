document.getElementById("Add").onclick = function() {
    let numOne = parseInt(document.getElementById("numOne").value);
    let numTwo = parseInt(document.getElementById("numTwo").value);

    // Handle potential errors (e.g., non-numeric input)
    if (isNaN(numOne) || isNaN(numTwo)) {
      alert("Please enter valid numbers!");
      return; // Exit the function if input is invalid
    }

    let result = numOne + numTwo;
    document.getElementById("result").textContent = `Sum of two number is ${result}`;
  };



  document.getElementById("Subtraction").onclick = function() {
    let numOne = parseInt(document.getElementById("numOne").value);
    let numTwo = parseInt(document.getElementById("numTwo").value);

    // Handle potential errors (e.g., non-numeric input)
    if (isNaN(numOne) || isNaN(numTwo)) {
      alert("Please enter valid numbers!");
      return; // Exit the function if input is invalid
    }

    let result = numOne - numTwo;
    document.getElementById("result").textContent = `Subtraction of two number is ${result}`;
  };


  document.getElementById("Multiply").onclick = function() {
    let numOne = parseInt(document.getElementById("numOne").value);
    let numTwo = parseInt(document.getElementById("numTwo").value);

    // Handle potential errors (e.g., non-numeric input)
    if (isNaN(numOne) || isNaN(numTwo)) {
      alert("Please enter valid numbers!");
      return; // Exit the function if input is invalid
    }

    let result = numOne * numTwo;
    document.getElementById("result").textContent = `Multiplication of two number is ${result}`;
  };


  document.getElementById("Divide").onclick = function() {
    let numOne = parseInt(document.getElementById("numOne").value);
    let numTwo = parseInt(document.getElementById("numTwo").value);

    // Handle potential errors (e.g., non-numeric input)
    if (isNaN(numOne) || isNaN(numTwo)) {
      alert("Please enter valid numbers!");
      return; // Exit the function if input is invalid
    }

    let result = numOne / numTwo;
    document.getElementById("result").textContent = `Division of two number is ${result}`;
  };

  