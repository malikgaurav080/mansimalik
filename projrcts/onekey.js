const head = document.getElementById("display");
const input = document.getElementById("input");
input.addEventListener("keypress", () => {
  head.innerText = "you have just pressed a key!!";
});
