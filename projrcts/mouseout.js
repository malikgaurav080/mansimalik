const head = document.getElementById("mouse");
const body = document.getElementById("abc");
body.addEventListener("mouseout", () => {
  head.innerText = "MOUSE OUT";
});
