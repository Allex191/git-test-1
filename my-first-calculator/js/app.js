// const inferiorInput = document.querySelector(".calculator__input--inferior");
// const mainInput = document.querySelector(".calculator__input--main");
// const numbersButtons = document.querySelectorAll(".calculator__button--number");
// const mainOperations = document.querySelectorAll(
//   ".calculator__button--operation"
// );
// const equalButton = document.querySelector(".calculator__button--equal");
// const correctSingleDigit = document.querySelector(
//   ".calculator__button--eraser-single"
// );
// const correctMultyDigit = document.querySelector(
//   ".calculator__button--eraser-all"
// );
// const turnOffCalculator = document.querySelector(".calculator__button--power");
// const calculatorHistory = document.querySelector(
//   ".calculator__button--history"
// );
// const negativeButton = document.querySelector(".calculator__button--negative");
// const decimalButton = document.querySelector(".calculator__button--decimal");

// let currentEnteredNumber = "";
// let previousEnteredNumber = null;
// let sum = null;
// let previousOperation = null;
// let currentOperation = null;
// let count = 0;

// const updateEnteredNumberUi = () => {
//   mainInput.value = currentEnteredNumber;
// };

// const getNumbersOperationResult = (operand1, operation, operand2) => {
//   console.log(operand1, operation, operand2);
//   switch (operation) {
//     case "+":
//       return operand1 + operand2;
//     case "-":
//       return operand1 - operand2;
//     case "x":
//       return operand1 * operand2;
//     case "÷":
//       return operand1 / operand2;
//   }
// };

// const setMainOperation = (mainOperation) => {
//   let isLastSignEqual = false;

//   if (previousOperation === "=") {
//     if (mainOperation === "=") {
//       debugger;
//     }
//     previousOperation = mainOperation;
//     isLastSignEqual = true;
//   }
//   //after first sum calc set sum = previousEnteredNumber
//   if (sum !== null) {
//     previousEnteredNumber = sum;
//   }
//   //on first sing-press
//   if (previousEnteredNumber === null) {
//     previousEnteredNumber = currentEnteredNumber;
//   }
//   //on second sign-press or equal-press calculate sum between first two or sum and current
//   else if (mainOperation === "=" && !isLastSignEqual) {
//     sum = getNumbersOperationResult(
//       +previousEnteredNumber,
//       previousOperation,
//       +currentEnteredNumber
//     );
//     console.log(sum);
//   }
//   previousOperation = mainOperation; //set operation for next calcul
//   currentEnteredNumber = ""; // reset input number on sign-press
// };

// const setEnteredNumber = (stringNumber) => {
//   currentEnteredNumber += stringNumber;
//   updateEnteredNumberUi();
// };

// for (const number of numbersButtons) {
//   number.addEventListener(
//     "click",
//     setEnteredNumber.bind(this, number.textContent)
//   );
// }

// for (const operation of mainOperations) {
//   operation.addEventListener(
//     "click",
//     setMainOperation.bind(this, operation.textContent)
//   );
// }

// equalButton.addEventListener(
//   "click",
//   setMainOperation.bind(this, equalButton.textContent)
// );
//
//
//
//
//
//

