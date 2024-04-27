let count = 0;

const btns = document.querySelectorAll(".btn");
const counter = document.getElementById("value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const type = e.currentTarget.classList;
    if (type.contains("decrease")) {
      count--;
    } else if (type.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "white";
    }
    value.textContent = count;
  });
});
// premere un pulsante sulla tastiera
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    const decreaseButton = document.querySelector(".decrease");
    decreaseButton.click();
  } else if (e.key === "ArrowRight") {
    const increaseButton = document.querySelector(".increase");
    increaseButton.click();
  } else if (e.key === "0") {
    const resetButton = document.querySelector(".reset");
    resetButton.click();
  }
});
