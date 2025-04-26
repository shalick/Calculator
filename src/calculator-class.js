export class Calculator {
  constructor() {
    this.memory = 0;
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  }

  signChange(a) {
    return a * -1;
  }

  percent(a) {
    return a / 100;
  }

  clearMemory() {
    this.memory = 0;
  }

  addToMemory(value) {
    this.memory += value;
  }

  subtractFromMemory(value) {
    this.memory -= value;
  }

  recallMemory() {
    return this.memory;
  }
}

export class CalculatorInvoker {
  constructor() {
    this.commands = [];
  }

  storeAndExecute(command) {
    this.commands.push(command);
    return command.execute();
  }
}
