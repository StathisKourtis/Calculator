let firstMember = 0;
let secondMember = 0;
let displayMember = "";
let currentOperator = "";
let lastSecondMember = "";
let lastOperator = ""
let OperationReady = true


// Numbers loop
let numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    console.log(OperationReady)
    if (OperationReady == true) {
      clear()
    }
    addNumberToString(displayMember, numbers[i].textContent)
    OperationReady = false
  }

  );
}

// Equal
document.getElementsByClassName("equal")[0].addEventListener("click", () => {

   if (displayMember !== "") {
    secondMember = displayMember;
    lastSecondMember = secondMember;
    lastOperator = currentOperator;
  }

  if (lastOperator && lastSecondMember !== "") {
    displayMember = operate(firstMember, lastOperator, lastSecondMember);
    display(displayMember);
    firstMember = displayMember;
    displayMember = ""; // Ready for next
  }
  OperationReady = true

});

// Operators loop
let operators = document.getElementsByClassName("operator");
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    if (currentOperator && firstMember !== "" && displayMember !== "") {
      secondMember = displayMember;
      firstMember = operate(firstMember, currentOperator, secondMember);
      display(firstMember);
      displayMember = "";
    } else {
      firstMember = displayMember;
      displayMember = "";
    }

    currentOperator = String(operators[i].textContent);
  });
}

document.getElementById("clear").addEventListener("click", () => {
  clear()
});


document.getElementById("erase").addEventListener("click", () => {
  let arr = displayMember.split("")
  arr.pop()
  
  displayMember = arr.join("")
  display(displayMember)

  
})

// Functions
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
    return add(Number(numA), Number(numB));
  } else if (operator === "X") {
    return multiply(Number(numA), Number(numB));
  } else if (operator === "-") {
    return subtract(Number(numA), Number(numB));
  } else if (operator === "/") {
    return divide(Number(numA), Number(numB));
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
  display(displayMember)
}
function operationCheck() {
  if (firstMember != "" && secondMember != "") {
    return true;
  } else {
    return false;
  }
}
function clear(){
firstMember = 0;
  secondMember = 0;
  displayMember = "";
  currentOperator = "";
  display(displayMember);
}
