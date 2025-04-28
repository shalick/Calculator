import "./styles/main.css";
import {
  VALUES,
  NUMBERVALUES,
  TOPBUTTONS,
  MEMORYBUTTONS,
  UNARYOPERATIONS,
  BINARYOPERATIONS,
  OPERATORS,
} from "./consts.js";

for (const buttonValue in VALUES) {
  let button = document.createElement("button");
  button.innerText = VALUES[buttonValue];
  button.classList.add("calculator-button");
  if (
    NUMBERVALUES.includes(VALUES[buttonValue]) ||
    VALUES[buttonValue] === VALUES.DECIMAL
  )
    button.dataset.number = VALUES[buttonValue];
  if (BINARYOPERATIONS.includes(VALUES[buttonValue])) {
    button.dataset.operation = VALUES[buttonValue];
  }
  if (OPERATORS.includes(VALUES[buttonValue])) {
    button.classList.add("orange-color");
  }
  if (UNARYOPERATIONS.includes(VALUES[buttonValue])) {
    button.dataset.unaryoperation = VALUES[buttonValue];
  }
  if (TOPBUTTONS.includes(VALUES[buttonValue])) {
    button.classList.add("top-color");
  }
  if (MEMORYBUTTONS.includes(VALUES[buttonValue])) {
    button.dataset.memory = VALUES[buttonValue];
  }
  switch (VALUES[buttonValue]) {
    case VALUES.EQUALS:
      button.dataset.equals = VALUES[buttonValue];
      button.classList.add("orange-color");
      break;
    case VALUES.ALLCLEAR:
      button.dataset.allclear = VALUES[buttonValue];
      break;
    case VALUES.ZERO:
      button.classList.add("zero");
      break;
  }
  document.querySelector(".buttons").appendChild(button);
}
