const container = document.getElementById("container");
const display = document.getElementById("display");

document.addEventListener("keydown", () => {
  display.style.color = "red";
  display.innerText = e.key + "is keydowm";
});

document.addEventListener("keyup", () => {
  display.style.color = "green";
  display.innerText = e.key + "is keyup";
});
