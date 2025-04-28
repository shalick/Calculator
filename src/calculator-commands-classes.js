class Command {
  execute() {}
  undo() {}
}
export class SquareCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.calculator = calculator;
    this.operand = operand;
  }

  execute() {
    return this.calculator.square(this.operand);
  }

  undo() {
    return null;
  }
}

export class CubeCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.calculator = calculator;
    this.operand = operand;
  }

  execute() {
    return this.calculator.cube(this.operand);
  }

  undo() {
    return null;
  }
}

export class PowerCommand extends Command {
  constructor(calculator, base, exponent) {
    super();
    this.calculator = calculator;
    this.base = base;
    this.exponent = exponent;
  }

  execute() {
    return this.calculator.power(this.base, this.exponent);
  }

  undo() {
    return null;
  }
}

export class TenToTheXCommand extends Command {
  constructor(calculator, exponent) {
    super();
    this.calculator = calculator;
    this.exponent = exponent;
  }

  execute() {
    return this.calculator.tenToTheX(this.exponent);
  }

  undo() {
    return null;
  }
}

export class ReciprocalCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.calculator = calculator;
    this.operand = operand;
  }

  execute() {
    return this.calculator.reciprocal(this.operand);
  }

  undo() {
    return null;
  }
}

export class SquareRootCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.calculator = calculator;
    this.operand = operand;
  }

  execute() {
    return this.calculator.squareRoot(this.operand);
  }

  undo() {
    return null;
  }
}

export class CubeRootCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.calculator = calculator;
    this.operand = operand;
  }

  execute() {
    return this.calculator.cubeRoot(this.operand);
  }

  undo() {
    return null;
  }
}

export class YRootCommand extends Command {
  constructor(calculator, base, root) {
    super();
    this.calculator = calculator;
    this.base = base;
    this.root = root;
  }

  execute() {
    return this.calculator.yRoot(this.base, this.root);
  }

  undo() {
    return null;
  }
}

export class FactorialCommand extends Command {
  constructor(calculator, operand) {
    super();
    this.calculator = calculator;
    this.operand = operand;
  }

  execute() {
    return this.calculator.factorial(this.operand);
  }

  undo() {
    return null;
  }
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
  undo() {
    return this.calculator.subtract(this.a, this.b);
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
  undo() {
    return this.calculator.add(this.a, this.b);
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
  undo() {
    return this.calculator.divide(this.a, this.b);
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
  undo() {
    return this.calculator.multiply(this.a, this.b);
  }
}
