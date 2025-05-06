import Calculator from "./calculator-class.js";
import CalculatorInvoker from "./calculator-invoker-class.js";
import CalculatorUI from "./calculator-ui-class.js";
import {
  NUMBERVALUES,
  BINARYOPERATIONS,
  OPERATORS,
  VALUES,
  KEYDOWNBUTTONS,
  UNARYOPERATIONS,
  MEMORYBUTTONS,
} from "./consts.js";

const buttons = document.querySelector(".buttons");
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

buttons.addEventListener("click", (event) => {
  if (
    NUMBERVALUES.includes(event.target.dataset.number) ||
    event.target.dataset.number === VALUES.DECIMAL
  ) {
    calculatorUI.appendNumber(event.target.dataset.number);
  }
  if (UNARYOPERATIONS.includes(event.target.dataset.unaryoperation)) {
    calculatorUI.chooseUnaryOperation(event.target.dataset.unaryoperation);
  }
  if (BINARYOPERATIONS.includes(event.target.dataset.operation)) {
    calculatorUI.chooseOperation(event.target.dataset.operation);
  }
  if (MEMORYBUTTONS.includes(event.target.dataset.memory)) {
    calculatorUI.memoryOperation(event.target.dataset.memory);
  }
  if (event.target.dataset.equals === VALUES.EQUALS) {
    calculatorUI.calculate();
  }
  if (event.target.dataset.allclear === VALUES.ALLCLEAR) {
    calculatorUI.allClear();
  }
  if (event.target.dataset.undo === VALUES.UNDO) {
    calculatorUI.undo();
  }
});
