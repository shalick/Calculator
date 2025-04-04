import "./styles/main.css";
const buttonValues = [
  "AC",
  "+/-",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
const buttonsOnTheRight = ["÷", "×", "-", "+", "="];
const buttonsOnTheTop = ["AC", "+/-", "%"];
let a = 0;
let b = null;
let operator = null;
const display = document.querySelector(".display");
display.value = "0";

function clearAll() {
  a = null;
  b = null;
  operator = null;
}

for (const buttonValue of buttonValues) {
  let button = document.createElement("button");
  button.innerText = buttonValue;
  button.classList.add("calculator-button");
  if (buttonsOnTheRight.includes(buttonValue)) {
    button.classList.add("orange-color");
  }
  if (buttonsOnTheTop.includes(buttonValue)) {
    button.classList.add("top-color");
  }
  if (buttonValue === "0") {
    button.style.width = "150px";
    button.style.gridColumn = "span 2";
  }

  button.addEventListener("click", () => {
    if (buttonsOnTheRight.includes(buttonValue)) {
      if (buttonValue === "=") {
        if (a !== null) {
          b = display.value;
          let numA = Number(a);
          let numB = Number(b);

          if (operator === "÷") {
            display.value = numA / numB;
          } else if (operator === "×") {
            display.value = numA * numB;
          } else if (operator === "-") {
            display.value = numA - numB;
          } else if (operator === "+") {
            display.value = numA + numB;
          }
          clearAll();
        }
      } else {
        operator = buttonValue;
        a = display.value;
        display.value = "";
      }
    } else if (buttonsOnTheTop.includes(buttonValue)) {
      if (buttonValue === "AC") {
        clearAll();
        display.value = 0;
      } else if (buttonValue === "+/-") {
        if (display.value != "" && display.value != "0") {
          if (display.value[0] == "-") {
            display.value = display.value.slice(1);
          } else {
            display.value = "-" + display.value;
          }
        }
      } else if (buttonValue === "%") {
        display.value = Number(display.value) / 100;
      }
    } else {
      if (buttonValue === ".") {
        if (display.value != "" && !display.value.includes(buttonValue)) {
          display.value += buttonValue;
        }
      } else if (display.value === "0") {
        display.value = buttonValue;
      } else {
        display.value += buttonValue;
      }
    }
  });
  document.querySelector(".buttons").appendChild(button);
}

document.addEventListener("keydown", function (event) {
  let keyValue = event.key;
  const keys = ["Enter", "*", "/"];
  if (buttonValues.includes(keyValue) || keys.includes(keyValue)) {
    if (buttonsOnTheRight.includes(keyValue) || keys.includes(keyValue)) {
      if (keyValue === "=" || keyValue === "Enter") {
        console.log(a, b);
        if (a !== null) {
          b = display.value;
          let numA = Number(a);
          let numB = Number(b);

          if (operator === "/") {
            display.value = numA / numB;
          } else if (operator === "*") {
            display.value = numA * numB;
          } else if (operator === "-") {
            display.value = numA - numB;
          } else if (operator === "+") {
            display.value = numA + numB;
          }
          clearAll();
        }
      } else {
        operator = keyValue;
        a = display.value;
        display.value = "";
      }
    } else if (keyValue === ".") {
      if (display.value != "" && !display.value.includes(keyValue)) {
        display.value += keyValue;
      }
    } else if (display.value === "0") {
      display.value = keyValue;
    } else {
      display.value += keyValue;
    }
  }
});
