import {
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  SignChangeCommand,
  PercentCommand,
  MemoryClearCommand,
  MemoryAddCommand,
  MemoryRecallCommand,
  MemorySubtractCommand,
  SquareCommand,
  CubeCommand,
  PowerOfTenCommand,
  SquareRootCommand,
  CubeRootCommand,
  FactorialCommand,
  PowerCommand,
  YRootXCommand,
  ReciprocalCommand,
} from "./calculator-commands-classes.js";
import { VALUES } from "./consts.js";

export default class CalculatorUI {
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
      case VALUES.POWER:
        result = new PowerCommand(this.calculator, prev, current);
        break;
      case VALUES.YROOT:
        result = new YRootXCommand(this.calculator, current, prev);
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
  memoryOperation(operation) {
    const displayValue = parseFloat(this.currentOperand);
    switch (operation) {
      case VALUES.MC:
        this.invoker.storeAndExecute(new MemoryClearCommand(this.calculator));
        break;
      case VALUES.MPLUS:
        if (!isNaN(displayValue))
          this.invoker.storeAndExecute(
            new MemoryAddCommand(this.calculator, displayValue),
          );
        break;
      case VALUES.MINUS:
        if (!isNaN(displayValue))
          this.invoker.storeAndExecute(
            new MemorySubtractCommand(this.calculator, displayValue),
          );
        break;
      case VALUES.MR:
        this.currentOperand = this.invoker.storeAndExecute(
          new MemoryRecallCommand(this.calculator),
        );
        break;
      default:
        return;
    }
    this.updateDisplay();
  }
  chooseUnaryOperation(operation) {
    if (this.currentOperand === "") return;
    let result;
    let current = parseFloat(this.currentOperand);
    switch (operation) {
      case VALUES.CHANGE:
        result = new SignChangeCommand(this.calculator, current);
        break;
      case VALUES.PERCENT:
        result = new PercentCommand(this.calculator, current);
        break;
      case VALUES.SQUARE:
        result = new SquareCommand(this.calculator, current);
        break;
      case VALUES.CUBE:
        result = new CubeCommand(this.calculator, current);
        break;
      case VALUES.TENTOTHEX:
        result = new PowerOfTenCommand(this.calculator, current);
        break;
      case VALUES.RECIPROCAL:
        result = new ReciprocalCommand(this.calculator, current);
        break;
      case VALUES.SQUAREROOT:
        result = new SquareRootCommand(this.calculator, current);
        break;
      case VALUES.CUBEROOT:
        result = new CubeRootCommand(this.calculator, current);
        break;
      case VALUES.FACTORIAL:
        result = new FactorialCommand(this.calculator, current);
        break;
      default:
        return;
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
    this.operation != null
      ? this.operation === VALUES.POWER || this.operation === VALUES.YROOT
        ? (this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation.slice(1, -1)}`)
        : (this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`)
      : (this.previousOperandTextElement.innerText = "");
  }
  undo() {
    this.currentOperand = this.invoker.undo();
    this.updateDisplay();
  }
}
