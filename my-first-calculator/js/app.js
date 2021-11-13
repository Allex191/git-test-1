const calculatorNumbers = document.querySelectorAll(
  ".calculator__button--number"
);
const calculatorInput = document.querySelector(".calculator__input");
const calculatorOperation = document.querySelectorAll(
  ".calculator__button--operation"
);

let calculatorValue = 0;

const getUserNumbers = (number) => {
  calculatorInput.value = number.textContent;
  calculatorValue = calculatorInput.value;
};

for (const number of calculatorNumbers) {
  number.addEventListener("click", getUserNumbers.bind(this, number));
}
