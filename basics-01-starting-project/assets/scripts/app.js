const defaultValue = 0;
let currentResult = defaultValue;
let logEntries = [];

function getNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  opertaionIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: opertaionIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("+", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getNumberInput();
  const initialResult = currentResult;

  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("-", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("*", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, currentResult);
  writeToLog("/", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

