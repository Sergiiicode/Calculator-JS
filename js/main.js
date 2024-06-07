const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const ligthMode = document.getElementById("light__mode");
const error = document.getElementById("error");

ligthMode.addEventListener("click", (e) => {
  document.documentElement.classList.toggle("dark");
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "=") {
      if (display.value !== "") {
        calculateResult();
      } else {
        error.style.display = "block";
      }
    } else if (btn.id === "ce") {
      clearDisplay();
    } else if (btn.id == "c") {
      deleteLastCharacter();
    } else if (display.value === "0" || display.value === "00") {
      display.value = btn.id;
    } else {
      display.value += btn.id;
      error.style.display = "none";
    }
  });
});

function calculateResult() {
  display.value = eval(display.value);
}

function clearDisplay() {
  display.value = "";
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}
