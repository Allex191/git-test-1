const numbersButtons = document.querySelectorAll(".calculator__button--number");
const mainInput = document.querySelector(".calculator__input--main");
const inferiorInput = document.querySelector(".calculator__input--inferior");
const operationsButtons = document.querySelectorAll(
  ".calculator__button--operation"
);
const equalButton = document.querySelector(".calculator__button--equal");






//0-9 eventListener
for (const number of numbersButtons) {
  number.addEventListener(
    "click",
    addUserNumber.bind(this, number.textContent)
  );
}

//- + * / eventListener
for (const operation of operationsButtons) {
  operation.addEventListener(
    "click",
    setMathOperation.bind(this, operation.textContent)
  );
}

equalButton.addEventListener(
  "click",
  createResult.bind(this, equalButton.textContent)
);







// apas cifra 2 si se pune in input  2
// apas plus si se pune din input in memory
// apas cifra si se pune in input
// daca apas + a doua oara cifra se pune in memory dar in input arata rezultatul
// daca apas egal in input arata rezultatul 5 dar in inferior arata 2+3=
// dupa cind apas plus in inferior arata rezultatul  5+

  //1.read userNumber
  //2.if currentOperation is null memoryStock = userNumber
  //3.if currentOperation not empty
  //1+1*
  //2*
  //2*5+

  


  



// const operationsLogic = {
//   "+": (x, y) => x + y,
//   "-": (x, y) => x - y,
//   "÷": (x, y) => x / y,
//   x: (x, y) => x * y,
// };
  
// let inferiorInputStorage = [];
// let inputNumbers = "";
// let memoryStock1 = null;
// let memoryStock2 = null;
// let result = 0;
// let currentOperation;

// const createResult = (equalSymbol) => {
//   result += operationsLogic[currentOperation](memoryStock1, memoryStock2);
//   mainInput.value = result;
//   inferiorInput.value = inferiorInputStorage.splice(0, 3, result);
//   inferiorInput.value = inferiorInputStorage.join("");
// };

// //receive userNumbers in string
// const addUserNumber = (number) => {
//   inputNumbers += number; //addstring of numbers from keyboard buttons
//   mainInput.value = inputNumbers; //show direct user input
// };

// //receive operation symbols in string
// const setMathOperation = (operation) => {
//   //1.read userNumber
//   //2.if currentOperation is null memoryStock = userNumber
//   //3.if currentOperation not empty
//   //1+1*
//   //2*
//   //2*5+

//   inferiorInputStorage.push(inputNumbers);
//   inferiorInputStorage.push(operation);
//   inferiorInput.value = inferiorInputStorage.join("");

//   if (memoryStock1 === null) {
//     memoryStock1 = +inputNumbers;
//     inputNumbers = "";
//     currentOperation = operation;
//   } else if (memoryStock2 === null && inputNumbers != "") {
//     memoryStock2 = +inputNumbers;
//     createResult();
//     memoryStock1 = null;
//     memoryStock2 = null;
//   }

//   inputNumbers = "";
// };
