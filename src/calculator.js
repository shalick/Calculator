import Calculator from "./calculator-class.js";
import CalculatorInvoker from "./calculator-invoker-class.js";
import CalculatorUI from "./calculator-ui-class.js";
import { NUMBERVALUES, OPERATORS, VALUES, KEYDOWNBUTTONS } from "./consts.js";

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const unaryOperationButtons = document.querySelectorAll(
  "[data-unaryoperation]",
);
const memoryButtons = document.querySelectorAll("[data-memory]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-allclear]");
const undoButton = document.querySelector("[data-undo]");
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
document.addEventListener("keydown", function (event) {
  let keyValue = event.key;
  if (NUMBERVALUES.includes(keyValue) || keyValue === VALUES.DECIMAL) {
    calculatorUI.appendNumber(keyValue);
  }
  switch (keyValue) {
    case KEYDOWNBUTTONS.MULTIPLY:
      keyValue = VALUES.MULTIPLY;
      break;
    case KEYDOWNBUTTONS.DIVIDE:
      keyValue = VALUES.DIVIDE;
      break;
    case KEYDOWNBUTTONS.EQUALS:
      keyValue = VALUES.EQUALS;
      break;
  }
  if (OPERATORS.includes(keyValue)) {
    calculatorUI.chooseOperation(keyValue);
  }
  if (keyValue === VALUES.EQUALS) {
    calculatorUI.calculate();
  }
});

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
undoButton.addEventListener("click", () => {
  calculatorUI.undo();
});
