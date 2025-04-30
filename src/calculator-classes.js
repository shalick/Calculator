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

  square(a) {
    return a * a;
  }
  cube(a) {
    return a * a * a;
  }
  power(base, exponent) {
    return base ** exponent;
  }
  tenToTheX(exponent) {
    return 10 ** exponent;
  }
  reciprocal(a) {
    if (a === 0) throw new Error("Cannot take reciprocal of zero");
    return 1 / a;
  }
  squareRoot(a) {
    if (a < 0) throw new Error("Cannot take square root of negative number");
    return Math.sqrt(a);
  }
  cubeRoot(a) {
    return Math.cbrt(a);
  }
  yRoot(base, root) {
    if (root === 0 || (base < 0 && root % 2 === 0))
      throw new Error("Invalid operation");
    return Math.pow(base, 1 / root);
  }

  factorial(n) {
    if (n < 0) {
      throw new Error("Factorial of negative number doesn't exist");
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }
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
