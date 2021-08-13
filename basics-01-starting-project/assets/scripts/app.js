const defaultValue = 0;

let currentResult = defaultValue;

function add() {
  currentResult += +userInput.value;
  outputResult(currentResult, userInput.value);
}
addBtn.addEventListener("click", add);

function subtract() {
  currentResult -= +userInput.value;
  outputResult(currentResult, userInput.value);
}
subtractBtn.addEventListener("click", subtract);

function multiply() {
  currentResult = currentResult * +userInput.value;
  outputResult(currentResult, userInput.value);
}
multiplyBtn.addEventListener("click", multiply);

/* const defaultValue = 0;

let currentResult = defaultValue;

function add() {
  currentResult += +userInput.value;
  outputResult(currentResult, userInput.value);
}
addBtn.addEventListener("click", add);

function subtract() {
  currentResult -= +userInput.value;
  outputResult(currentResult, userInput.value);
}
subtractBtn.addEventListener("click", subtract);

function multiply() {
  currentResult = currentResult * +userInput.value;
  outputResult(currentResult, userInput.value);
}
multiplyBtn.addEventListener("click", multiply);
 */

