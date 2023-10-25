let num1 = 0;
let num2 = 0;
let operator;

const display = document.querySelector(".display");
//initial display
let displayValue = "0";

function updateText(newInput){
  if(displayValue === "0"){
    displayValue = newInput;
  } else if(newInput === "clear"){
    displayValue = "0";
  } else {
    displayValue += newInput;
  }
  display.textContent = displayValue;
}


//get references to number buttons
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

zero.addEventListener("click", () => {
  updateText("0");
})
one.addEventListener("click", () => {
  updateText("1");
})
two.addEventListener("click", () => {
  updateText("2");
})
three.addEventListener("click", () => {
  updateText("3");
})
four.addEventListener("click", () => {
  updateText("4");
})
five.addEventListener("click", () => {
  updateText("5");
})
six.addEventListener("click", () => {
  updateText("6");
})
seven.addEventListener("click", () => {
  updateText("7");
})
eight.addEventListener("click", () => {
  updateText("8");
})
nine.addEventListener("click", () => {
  updateText("9");
})


//get references to operators
const division = document.querySelector("#divide");
const times= document.querySelector("#multiply");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const equals = document.querySelector("#equals");

//clear function
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
 updateText("clear");
});


function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function operate(operator, num1, num2){
  switch(operator) {
    case "+":
      display.textContent = add(num1, num2);
      break;
    case "-":
      display.textContent = subtract(num1, num2);
      break;
    case "*":
      display.textContent = multiply(num1, num2);
      break;
    case "/":
      display.textContent = divide(num1, num2);
      break;
    default:
      console.log("Something's wrong");
  }
}

// operate("+", 7, 2);
// operate("-", 7, 2);
// operate("*", 7, 2);
// operate("/", 7, 2);