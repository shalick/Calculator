import {
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  SignChangeCommand,
  PercentCommand,
} from "./calculator-commands-classes.js";
import { VALUES } from "./consts.js";

export class CalculatorUI {
  constructor(
    calculator,
    invoker,
    previousOperandTextElement,
    currentOperandTextElement,
  ) {
    this.calculator = calculator;
    this.invoker = invoker;
    this.currentOperation = null;
    this.firstOperand = null;
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.allClear();
  }

  allClear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
    this.updateDisplay();
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
    this.updateDisplay();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.calculate();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    this.updateDisplay();
  }

  calculate() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case VALUES.PLUS:
        result = new AddCommand(this.calculator, prev, current);
        break;

      case VALUES.MINUS:
        result = new SubtractCommand(this.calculator, prev, current);
        break;

      case VALUES.MULTIPLY:
        result = new MultiplyCommand(this.calculator, prev, current);
        break;

      case VALUES.DIVIDE:
        result = new DivideCommand(this.calculator, prev, current);
        break;
      default:
        return;
    }
    const outputValue = this.invoker.storeAndExecute(result);
    this.currentOperand = outputValue;
    this.operation = undefined;
    this.previousOperand = "";
    this.updateDisplay();
  }
  calculateChangeOrPercent(operation) {
    if (this.currentOperand === "") return;
    let result;
    let current = parseFloat(this.currentOperand);
    if (operation === VALUES.CHANGE) {
      result = new SignChangeCommand(this.calculator, current);
    }
    if (operation === VALUES.PERCENT) {
      result = new PercentCommand(this.calculator, current);
    }
    const outputValue = this.invoker.storeAndExecute(result);
    this.currentOperand = outputValue;
    this.updateDisplay();
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand,
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}
