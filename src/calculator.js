import { Calculator, CalculatorInvoker } from "./calculator-classes.js";
import { CalculatorUI } from "./calculator-ui-class.js";

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const unaryOperationButtons = document.querySelectorAll(
  "[data-unaryoperation]",
);
const memoryButtons = document.querySelectorAll("[data-memory]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-allclear]");
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
for (const button of unaryOperationButtons) {
  button.addEventListener("click", () => {
    calculatorUI.chooseUnaryOperation(button.innerText);
  });
}
for (const button of memoryButtons) {
  button.addEventListener("click", () => {
    calculatorUI.memoryOperation(button.innerText);
  });
}
equalsButton.addEventListener("click", () => {
  calculatorUI.calculate();
});
allClearButton.addEventListener("click", () => {
  calculatorUI.allClear();
});
