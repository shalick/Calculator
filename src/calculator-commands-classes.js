class Command {
  execute() {}
  undo() {}
}
export class MemoryClearCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    return this.calculator.clearMemory();
  }
}

export class MemoryAddCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    return this.calculator.addToMemory(this.value);
  }
}

export class MemorySubtractCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    return this.calculator.subtractFromMemory(this.value);
  }
}

export class MemoryRecallCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    return this.calculator.recallMemory();
  }
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
