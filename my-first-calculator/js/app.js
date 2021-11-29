const inferiorInput = document.querySelector(".calculator__input--inferior");
const mainInput = document.querySelector(".calculator__input--main");
const numbersButtons = document.querySelectorAll(".calculator__button--number");
const mainOperations = document.querySelectorAll(
  ".calculator__button--operation"
);
const equalButton = document.querySelector(".calculator__button--equal");
const correctSingleDigit = document.querySelector(
  ".calculator__button--eraser-single"
);
const correctMultyDigit = document.querySelector(
  ".calculator__button--eraser-all"
);
const turnOffCalculator = document.querySelector(".calculator__button--power");
const calculatorHistory = document.querySelector(
  ".calculator__button--history"
);
const negativeButton = document.querySelector(".calculator__button--negative");
const decimalButton = document.querySelector(".calculator__button--decimal");

let currentEnteredNumber = "";
let previousEnteredNumber = null;
let sum = 0;
let currentOperation = null;

const updateEnteredNumberUi = () => {
  mainInput.value = currentEnteredNumber;
};

const calculateResult = (
  previousEnteredNumber,
  currentOperation,
  currentEnteredNumber
) => {
  switch (currentOperation) {
    case "+":
      return previousEnteredNumber + currentOperation;
    case "-":
      return previousEnteredNumber - currentOperation;
    case "*":
      return previousEnteredNumber * currentOperation;
    case "/":
      return previousEnteredNumber + currentOperation;
  }
};

const setMainOperation = (mainOperation) => {
  currentOperation = mainOperation;
  if (previousEnteredNumber === null) {
    previousEnteredNumber = currentEnteredNumber;
  } else {
    calculateResults(
      previousEnteredNumber,
      currentOperation,
      currentEnteredNumber
    );
  }
};

const setEnteredNumber = (stringNumber) => {
  currentEnteredNumber = stringNumber;
  updateEnteredNumberUi();
};

for (const number of numbersButtons) {
  number.addEventListener(
    "click",
    setEnteredNumber.bind(this, number.textContent)
  );
}

for (const operation of mainOperations) {
  operation.addEventListener(
    "click",
    setMainOperation.bind(this, operation.textContent)
  );
}
