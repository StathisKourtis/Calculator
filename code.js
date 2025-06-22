let firstMember = 0;
let secondMember = 0;
let displayMember = "";
let currentOperator = "";
let lastSecondMember = "";
let lastOperator = "";
let OperationReady = true;

// Numbers loop
let numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    console.log(OperationReady);
    if (OperationReady == true) {
      clear();
    }
    if (numbers[i].textContent == ".") {
      if (checkForOneDot(displayMember)) {
        return;
      }

      addNumberToString(displayMember, numbers[i].textContent);
      OperationReady = false;
    } else {
      addNumberToString(displayMember, numbers[i].textContent);
      OperationReady = false;
    }
  });
}

// Equal
document.getElementById("equal").addEventListener("click", () => {
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
  OperationReady = true;
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
  clear();
});

document.getElementById("erase").addEventListener("click", () => {
  let arr = displayMember.split("");
  arr.pop();

  displayMember = arr.join("");
  display(displayMember);
});
// Hotkeys
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if ((event.key >= "0" && event.key <= "9") || event.key === ".") {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].textContent === event.key) {
        numbers[i].click();
      }
    }
  }
  if (event.key == "Backspace") {
    document.getElementById("erase").click();
  }
  if (event.key == "*") {
    document.getElementById("multiply").click();
  }
  if (event.key == "Enter") {
    document.getElementById("equal").click();
  }
  if (event.key == "-") {
    document.getElementById("subtruct").click();
  }
  if (event.key == "/") {
    document.getElementById("modulo").click();
  }
  if (event.key == "Shift") {
    document.getElementById("clear").click();
  }
  if (event.key == "+") {
    document.getElementById("plus").click();
  }
});

// Functions
function add(a, b) {
  let result = a + b;
  return result.toFixed(2);
}
function multiply(a, b) {
  let result = a * b;
  return result.toFixed(2);
}
function subtract(a, b) {
  let result = a - b;
  return result.toFixed(2);
}
function divide(a, b) {
  if (a == 0 || b == 0) {
    return "Can't divide by zero";
  } else {
    let result = a / b;
    return result.toFixed(2);
  }
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
  display(displayMember);
}
function operationCheck() {
  if (firstMember != "" && secondMember != "") {
    return true;
  } else {
    return false;
  }
}
function clear() {
  firstMember = 0;
  secondMember = 0;
  displayMember = "";
  currentOperator = "";
  display(displayMember);
}
function checkForOneDot(displayMember) {
  let arr = displayMember.split("");
  if (arr.includes(".")) {
    return true;
  } else {
    return false;
  }
}
