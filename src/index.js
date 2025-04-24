import "./styles/main.css";

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.allClear();
  }

  allClear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  calculatePercentage() {
    if (this.currentOperand === "") return;
    let current = parseFloat(this.currentOperand);
    let percentageValue = current / 100;

    this.currentOperand = percentageValue.toString();
    this.updateDisplay();
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "×":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      // case "+/-":
      //   console.log(typeof current);
      //   break;

      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
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
const VALUES = {
  ALLCLEAR: "AC",
  CHANGE: "+/-",
  PERCENT: "%",
  DIVIDE: "÷",
  SEVEN: "7",
  EIGHT: "8",
  NINE: "9",
  MULTIPLY: "×",
  FOUR: "4",
  FIVE: "5",
  SIX: "6",
  MINUS: "-",
  ONE: "1",
  TWO: "2",
  TREE: "3",
  PLUS: "+",
  ZERO: "0",
  DECIMAL: ".",
  EQUALS: "=",
};
const NUMBERVALUES = {
  ZERO: "0",
  ONE: "1",
  TWO: "2",
  TREE: "3",
  FOUR: "4",
  FIVE: "5",
  SIX: "6",
  SEVEN: "7",
  EIGHT: "8",
  NINE: "9",
};
const OPERATORS = {
  DIVIDE: "÷",
  MULTIPLY: "×",
  MINUS: "-",
  PLUS: "+",
};
const EQUALS = {
  EQUALS: "=",
};
const ALLCLEAR = {
  ALLCLEAR: "AC",
};
const TOPBUTTONS = {
  ALLCLEAR: "AC",
  CHANGE: "+/-",
  PERCENT: "%",
};

for (const buttonValue in VALUES) {
  let button = document.createElement("button");
  button.innerText = VALUES[buttonValue];
  button.classList.add("calculator-button");
  if (
    Object.keys(NUMBERVALUES).includes(buttonValue) ||
    buttonValue === "DECIMAL"
  )
    button.dataset.number = VALUES[buttonValue];
  if (Object.keys(OPERATORS).includes(buttonValue)) {
    button.dataset.operation = VALUES[buttonValue];
    button.classList.add("orange-color");
  }
  if (Object.keys(EQUALS).includes(buttonValue)) {
    button.dataset.equals = VALUES[buttonValue];
    button.classList.add("orange-color");
  }
  if (Object.keys(ALLCLEAR).includes(buttonValue)) {
    button.dataset.allclear = VALUES[buttonValue];
  }
  if (Object.keys(TOPBUTTONS).includes(buttonValue))
    button.classList.add("top-color");
  if (VALUES[buttonValue] === "0") button.classList.add("zero");
  document.querySelector(".buttons").appendChild(button);
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-allclear]");
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
    calculator.updateDisplay();
  });
}
for (const button of operationButtons) {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
}
equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
allClearButton.addEventListener("click", () => {
  calculator.allClear();
  calculator.updateDisplay();
});
