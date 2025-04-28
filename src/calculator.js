import { Calculator, CalculatorInvoker } from "./calculator-class.js";
import { CalculatorUI } from "./calculator-ui-class.js";

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-allclear]");
const changeButton = document.querySelector("[data-change]");
const percentButton = document.querySelector("[data-percent]");
const memoryAddButton = document.querySelector("[data-mplus]");
const memoryClearButton = document.querySelector("[data-mc]");
const memorySubtract = document.querySelector("[data-mminus]");
const memoryRecall = document.querySelector("[data-mr]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]",
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]",
);

const calculator = new Calculator();
const invoker = new CalculatorInvoker();
const calculatorUI = new CalculatorUI(
  calculator,
  invoker,
  previousOperandTextElement,
  currentOperandTextElement,
);

for (const button of numberButtons) {
  button.addEventListener("click", () => {
    calculatorUI.appendNumber(button.innerText);
  });
}
for (const button of operationButtons) {
  button.addEventListener("click", () => {
    calculatorUI.chooseOperation(button.innerText);
  });
}
equalsButton.addEventListener("click", () => {
  calculatorUI.calculate();
});
allClearButton.addEventListener("click", () => {
  calculatorUI.allClear();
});
percentButton.addEventListener("click", () => {
  calculatorUI.calculateChangeOrPercent(percentButton.innerText);
});
changeButton.addEventListener("click", () => {
  calculatorUI.calculateChangeOrPercent(changeButton.innerText);
});
memoryAddButton.addEventListener("click", () => {
  calculatorUI.memoryAdd();
});
memoryClearButton.addEventListener("click", () => {
  calculatorUI.memoryClear();
});
memoryRecall.addEventListener("click", () => {
  calculatorUI.memoryRecall();
});
memorySubtract.addEventListener("click", () => {
  calculatorUI.memorySubtract();
});
