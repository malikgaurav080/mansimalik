const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const display = document.getElementById("display");
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  display.innerText = 0;
});
increment.addEventListener("click", () => {
  const value = Number(display.innerText);
  if (value >= 20) {
    alert("value more then 20 is not allowed");
  } else {
    display.innerText = value + 1;
  }
});
decrement.addEventListener("click", () => {
  const value = Number(display.innerText);
  if (value > 0) {
    display.innerText = value - 1;
  } else {
    alert("value less then 0 is not allowed");
  }
});
