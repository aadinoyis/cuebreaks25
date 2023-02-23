let equal_pressed = false;
//Refer all buttons excluding AC and DEL
let button_input = Array.from(document.querySelectorAll(".input-button"));
//Refer input,equal,clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let erase = document.getElementById("erase");


//Access each class using forEach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    //display value of each button
    input.value += button_class.value;
  });
});

//Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
  let inp_val = input.value;
  try {
    //evaluate user's input
    let solution = eval(inp_val);
    //True for natural numbers
    //false for decimals
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    //If user has entered invalid input
    alert("Invalid Input");
  }
});

//Erase Single Digit
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});

//Clear Whole Input
erase.addEventListener("contextmenu", () => {
  input.value = "";
});

//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
