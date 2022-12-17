let a = 0;
let b = 0;
let result = 0;
let operationChoice = "";
const allBtn = document.querySelectorAll("button:not([data-clear])");
const btnToDisp = document.querySelectorAll("[data-can-display]");
const btnPoint = document.querySelector("[data-point]");
const btnTurnNegatif = document.querySelector("[data-turn-negatif");
const btnClear = document.querySelector("[data-clear]");
const btnDelete = document.querySelector("[data-del]");
const btnEqual = document.querySelector("[data-equal]");
const btnOperation = document.querySelectorAll("[data-operation]");
const resultDisp = document.querySelector("[data-result-display");
const operationDisp = document.querySelector("[data-operation-display]");

const add = (num_1, num_2) => {
  result = num_1 + num_2;
  resultDisp.innerHTML = result;
  return result;
};

const substract = (num_1, num_2) => {
  return (result = num_1 - num_2);
};

const multiply = (num_1, num_2) => {
  return (result = num_1 * num_2);
};

const devide = (num_1, num_2) => {
  return (result = num_1 / num_2);
};

const operate = (num_1, num_2, operation) => {
  switch (operation) {
    case "+":
      add(num_1, num_2);
      return result;
      break;

    case "-":
      substract(num_1, num_2);
      return result;
      break;

    case "*":
      multiply(num_1, num_2);
      return result;
      break;

    case "/":
      devide(num_1, num_2);
      if (
        result == Infinity ||
        result == NaN ||
        (a == 0 && b == 0) ||
        (a <= 0 && b == 0)
      ) {
        return (result = "impossible");
      } else {
        return result;
      }
      break;

    default:
      break;
  }
};

const displayValues = () => {
  btnToDisp.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (resultDisp.innerHTML.length <= 10) {
        resultDisp.innerHTML == "0"
          ? (resultDisp.innerHTML = btn.value)
          : (resultDisp.innerHTML += btn.value);
      }
    });
  });
};

const displayPoint = () => {
  btnPoint.addEventListener("click", () => {
    resultDisp.innerHTML.includes(".")
      ? (resultDisp.innerHTML = resultDisp.innerHTML)
      : (resultDisp.innerHTML += btnPoint.value);
  });
};

const turnNegatif = () => {
  btnTurnNegatif.addEventListener("click", () => {
    resultDisp.innerHTML *= -1;
  });
};

const operationChoose = () => {
  btnOperation.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (resultDisp.innerHTML != 0) {
        a = parseFloat(resultDisp.innerHTML);
        operationChoice = btn.value;
        operationDisp.innerHTML = `${a} ${operationChoice}`;
        resultDisp.innerHTML = 0;
      }

      if (operationChoice != btn.value) {
        operationChoice = btn.value;
        operationDisp.innerHTML = `${a} ${operationChoice}`;
      }
    });
  });
};

const equal = () => {
  btnEqual.addEventListener("click", () => {
    if (operationDisp.innerHTML !== "&nbsp;") {
      b = parseFloat(resultDisp.innerHTML);
      operate(a, b, operationChoice);
      if (result == "impossible") {
        resultDisp.innerHTML =
          "Sure, just find a sientific caluculator for this operation 🤣. Press C to start over!";
        operationDisp.innerHTML = "";
        allBtn.forEach((btn) => {
          btn.setAttribute("disabled", "true");
        });
        return;
      }
      resultDisp.innerHTML = 0;
      `${result}`.length > 10 && typeof result != "string"
        ? (a = result.toFixed(10))
        : (a = result);

      operationDisp.innerHTML = `${result} ${operationChoice}`;
    }
  });
};

const deleteChar = () => {
  btnDelete.addEventListener("click", () => {
    if (
      resultDisp.innerHTML != 0 ||
      (resultDisp.innerHTML == 0 && resultDisp.innerHTML.includes("."))
    ) {
      resultDisp.innerHTML = resultDisp.innerHTML.slice(0, -1);
    }

    if (resultDisp.innerHTML == "") {
      resultDisp.innerHTML = 0;
    }
  });
};

const clear = () => {
  btnClear.addEventListener("click", () => {
    resultDisp.innerHTML = 0;
    operationDisp.innerHTML = `&nbsp`;
    a = 0;
    b = 0;
    result = 0;
    operationChoice = "";
    allBtn.forEach((btn) => {
      btn.removeAttribute("disabled", "false");
    });
  });
};

const keyBoardSupport = () => {
  document.addEventListener("keyup", (e) => {
    allBtn.forEach((btn) => {
      if (btn.value == e.key) {
        btn.click();
      } else if (btn.value == "=" && e.key == "Enter") {
        btnEqual.click();
      } else if (
        btn.value == "del" &&
        (e.key == "Delete" || e.key == "Backspace")
      ) {
        btnDelete.click();
      } else if (e.key == "Escape" || e.key == "c") {
        btnClear.click();
      } else if (e.key == "n") {
        console.log(e.key);
        btnTurnNegatif.click();
      }
    });
  });
};

const calculator = () => {
  keyBoardSupport();
  displayValues();
  displayPoint();
  turnNegatif();
  operationChoose();
  equal();
  deleteChar();
  clear();
};

calculator();
