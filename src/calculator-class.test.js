import Calculator from "./calculator-class.js";

describe("Calculator", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test("adds two numbers", () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(calc.subtract(5, 2)).toBe(3);
  });

  test("multiply two numbers", () => {
    expect(calc.multiply(3, 4)).toBe(12);
  });

  test("divide", () => {
    expect(calc.divide(10, 2)).toBe(5);
  });

  test("divide to zero", () => {
    expect(() => calc.divide(5, 0)).toThrow("Cannot divide by zero");
  });

  test("change number's sign", () => {
    expect(calc.signChange(5)).toBe(-5);
    expect(calc.signChange(-7)).toBe(7);
  });

  test("percent", () => {
    expect(calc.percent(50)).toBe(0.5);
  });
  test("cube", () => {
    expect(calc.cube(3)).toBe(27);
  });

  test("power", () => {
    expect(calc.power(2, 3)).toBe(8);
  });

  test("power of ten", () => {
    expect(calc.powerOfTen(2)).toBe(100);
  });

  test("reciprocal", () => {
    expect(calc.reciprocal(2)).toBe(0.5);
  });

  test("reciprocal of zero", () => {
    expect(() => calc.reciprocal(0)).toThrow("Cannot take reciprocal of zero");
  });

  test("square root", () => {
    expect(calc.squareRoot(9)).toBe(3);
  });

  test("square root of negative", () => {
    expect(() => calc.squareRoot(-1)).toThrow(
      "Cannot take square root of negative number",
    );
  });

  test("cube root", () => {
    expect(calc.cubeRoot(27)).toBe(3);
  });

  test("y root x", () => {
    expect(calc.yRootX(8, 3)).toBe(2);
  });

  test("y root x invalid", () => {
    expect(() => calc.yRootX(-8, 2)).toThrow("Invalid operation");
    expect(() => calc.yRootX(4, 0)).toThrow("Invalid operation");
  });

  test("factorial", () => {
    expect(calc.factorial(0)).toBe(1);
    expect(calc.factorial(1)).toBe(1);
    expect(calc.factorial(5)).toBe(120);
  });

  test("factorial of negative", () => {
    expect(() => calc.factorial(-1)).toThrow(
      "Factorial of negative number doesn't exist",
    );
  });
});
