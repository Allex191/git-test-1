const inputNumber = document.querySelector("#input-number");
const addBtn = document.querySelector("#btn-add");
const subtractBtn = document.querySelector("#btn-subtract");
const multiplyBtn = document.querySelector("#btn-multiply");
const divideBtn = document.querySelector("#btn-divide");
const currentCalculationOutput = document.querySelector("#current-calculation");
const currentResult = document.querySelector("#current-result");
currentResult.style.backgroundColor = "red"; //test

let sum = 0;

const showPageContent = (currentValue, currentOperation, enteredValue, sum) => {
  currentCalculationOutput.textContent = `${currentValue} ${currentOperation} ${enteredValue} = ${sum}`;
};

const calculateResult = (calculationType) => {
  let enteredValue = parseInt(inputNumber.value);
  if (isNaN(enteredValue)) {
    alert("enter a valid value");
    return;
  }
  let currentValue = sum;
  let currentOperation;
  if (calculationType === "ADD") {
    sum += enteredValue;
    currentOperation = "+";
  } else if (calculationType === "SUBTRACT") {
    sum -= enteredValue;
    currentOperation = "-";
  } else if (calculationType === "MULTIPLY") {
    sum *= enteredValue;
    currentOperation = "*";
  } else if (calculationType === "DIVIDE") {
    sum /= enteredValue;
    currentOperation = "/";
  }
  showPageContent(currentValue, currentOperation, enteredValue, sum);
};

addBtn.addEventListener("click", calculateResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculateResult.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculateResult.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculateResult.bind(this, "DIVIDE"));

/* const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();

  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNumber
  ) {
    return;
  }
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calculateResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculateResult.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculateResult.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculateResult.bind(this, "DIVIDE"));
 */
