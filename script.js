let globalNum1 = null;
let globalNum2 = null;
let globalOperator = null;
let lastButtonWasNum = false;
let displayValue = null;
const DISPLAY_DIGITS = 8;

const display = document.querySelector(".display");

//clear function
function clearScreen(){
  displayValue = "0";
  globalNum1 = null;
  globalNum2 = null;
  globalOperator = null;
  updateText(displayValue);
  lastButtonWasNum = false;
}

function updateText(newInput){
  if(newInput === "." && displayValue.includes(newInput)){return;}
  //append to string if last button was num
  if(lastButtonWasNum && displayValue !== "0"){
    displayValue += newInput;
  } else {
    displayValue = newInput;
  }
  //update display
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
const dot = document.querySelector("#dot");

zero.addEventListener("click", () => {
  updateText("0");
  lastButtonWasNum = true;
})
one.addEventListener("click", () => {
  updateText("1");
  lastButtonWasNum = true;
})
two.addEventListener("click", () => {
  updateText("2");
  lastButtonWasNum = true;
})
three.addEventListener("click", () => {
  updateText("3");
  lastButtonWasNum = true;
})
four.addEventListener("click", () => {
  updateText("4");
  lastButtonWasNum = true;
})
five.addEventListener("click", () => {
  updateText("5");
  lastButtonWasNum = true;
})
six.addEventListener("click", () => {
  updateText("6");
  lastButtonWasNum = true;
})
seven.addEventListener("click", () => {
  updateText("7");
  lastButtonWasNum = true;
})
eight.addEventListener("click", () => {
  updateText("8");
  lastButtonWasNum = true;
})
nine.addEventListener("click", () => {
  updateText("9");
  lastButtonWasNum = true;
})
dot.addEventListener("click", () => {
  updateText(".");
});


//get references to operators
const divideBtn = document.querySelector("#divide");
const timesBtn= document.querySelector("#multiply");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const equalsBtn = document.querySelector("#equals");

function saveNums(){
  //if no input do nothing
  if(displayValue === null) {return;}
  //if both are null save to num1
  if(globalNum1 === null && globalNum2 === null){
    globalNum1 = +displayValue;
  }
  //if only num2 empty save to that
  else if(globalNum2 === null){
    globalNum2 = +displayValue;
  }
  //if both are occupied shift num2 to num1 and save new as num2
  else {
    globalNum1 = globalNum2;
    globalNum2 = +displayValue;
  }
}

divideBtn.addEventListener("click", () => {
  lastButtonWasNum = false;
  saveNums();
  operate("/", globalNum1, globalNum2);
});
timesBtn.addEventListener("click", () => {
  lastButtonWasNum = false;
  saveNums();
  operate("*", globalNum1, globalNum2);
});
minusBtn.addEventListener("click", () => {
  lastButtonWasNum = false;
  saveNums();
  operate("-", globalNum1, globalNum2);
});
plusBtn.addEventListener("click", () => {
  lastButtonWasNum = false;
  saveNums();
  operate("+", globalNum1, globalNum2);
});
equalsBtn.addEventListener("click", () => {
  lastButtonWasNum = false;
  saveNums();
  operate("=", globalNum1, globalNum2);
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearScreen);


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

function operate(operator, n1, n2){
  let result = null;
  if(n1 !== null && n2 !== null && globalOperator !== null){
    console.log(globalNum1);
    console.log(globalOperator);
    console.log(globalNum2);

    switch(globalOperator) {
      case "+":
        result = add(n1, n2);
        break;
      case "-":
        result = subtract(n1, n2);
        break;
      case "*":
        result = multiply(n1, n2);
        break;
      case "/":
        if(n2 === 0){
          display.textContent = "I REFUSE!";
        } else {
          result = divide(n1, n2);
        }
        break;
      default:
        console.log("Something's wrong");
    }
    if(result !== null){
      globalNum1 = globalNum2;
      globalNum2 = result;
      if(result.toString().length > DISPLAY_DIGITS){
        let truncated = Math.trunc(result);
        if(truncated.toString().length >= DISPLAY_DIGITS){
          updateText(Math.round(result).toString());
        } else {
          let length = truncated.toString().length;
          let decimals = DISPLAY_DIGITS - length;
          updateText(result.toFixed(decimals));
        }
      } else {
        updateText(result.toString());
      }
    }
  }
  if(operator !== "="){
    globalOperator = operator;
  } else {
    globalOperator = null;
  }
}

// operate("+", 7, 2);
// operate("-", 7, 2);
// operate("*", 7, 2);
// operate("/", 7, 2);