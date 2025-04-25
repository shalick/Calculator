import Calculator from "./calculator-class.js";

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-allclear]");
const changeButton = document.querySelector("[data-change]");
const percentButton = document.querySelector("[data-percent]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]",
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]",
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement,
);

for (const button of numberButtons) {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
  });
}
for (const button of operationButtons) {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
  });
}
equalsButton.addEventListener("click", () => {
  calculator.compute();
});
allClearButton.addEventListener("click", () => {
  calculator.allClear();
});
percentButton.addEventListener("click", () => {
  calculator.calculatePercentage();
});
changeButton.addEventListener("click", () => {
  calculator.calculateChange();
});
