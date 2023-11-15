let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".button");

let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  display.textContent = currentNumber;
}

function appendOperator(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
  }
}

function calculate() {
  if (currentNumber !== "") {
    let result = eval(previousNumber + operator + currentNumber);
    currentNumber = result;
    previousNumber = "";
    operator = "";
    display.textContent = result;
  }
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  display.textContent = "0";
}
