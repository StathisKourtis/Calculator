let firstMember = 0;
let secondMember = 0;
let displayMember = "";
let currentOperator = "";
// Numbers loop
let numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () =>
    addNumberToString(displayMember, numbers[i].textContent)
  );
}

// Equal
document.getElementsByClassName("equal")[0].addEventListener("click", () => {
  displayMember = operate(firstMember, currentOperator, displayMember);
  display(displayMember);
  // alert("works")
});

// Operators loop
let operators = document.getElementsByClassName("operator");
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    currentOperator = String(operators[i].textContent);
    fromFirstToSecond();
  });
}

document.getElementById("clear").addEventListener("click", () => {
  firstMember = 0;
  secondMember = 0;
  displayMember = "";
  currentOperator = "";
  display(displayMember)
});

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function operate(numA, operator, numB) {
  if (operator === "+") {
    return add(numA, numB);
  } else if (operator === "X") {
    return multiply(numA, numB);
  } else if (operator === "-") {
    return subtract(numA, numB);
  } else if (operator === "/") {
    return divide(numA, numB);
  } else {
    return alert("operator error");
  }
}

function display(num) {
  let screen = document.querySelector(".screen");
  screen.textContent = num;
}

function addNumberToString(a = "", b = "") {
  displayMember = String(displayMember) + String(b);
  display(displayMember);
  return;
}

function fromFirstToSecond() {
  firstMember = displayMember;
  displayMember = "";
}
