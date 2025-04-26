class Command {
  execute() {}
}

export class SignChangeCommand extends Command {
  constructor(calculator, a) {
    super();
    this.calculator = calculator;
    this.a = a;
  }

  execute() {
    return this.calculator.signChange(this.a);
  }
}

export class PercentCommand extends Command {
  constructor(calculator, a) {
    super();
    this.calculator = calculator;
    this.a = a;
  }

  execute() {
    return this.calculator.percent(this.a);
  }
}

export class AddCommand extends Command {
  constructor(calculator, a, b) {
    super();
    this.calculator = calculator;
    this.a = a;
    this.b = b;
  }

  execute() {
    return this.calculator.add(this.a, this.b);
  }
}

export class SubtractCommand extends Command {
  constructor(calculator, a, b) {
    super();
    this.calculator = calculator;
    this.a = a;
    this.b = b;
  }

  execute() {
    return this.calculator.subtract(this.a, this.b);
  }
}

export class MultiplyCommand extends Command {
  constructor(calculator, a, b) {
    super();
    this.calculator = calculator;
    this.a = a;
    this.b = b;
  }

  execute() {
    return this.calculator.multiply(this.a, this.b);
  }
}

export class DivideCommand extends Command {
  constructor(calculator, a, b) {
    super();
    this.calculator = calculator;
    this.a = a;
    this.b = b;
  }

  execute() {
    return this.calculator.divide(this.a, this.b);
  }
}
