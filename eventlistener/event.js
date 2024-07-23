let single = document.getElementById("single");
// let double = document.getElementById("double");
function one() {
  alert("you have just click on my button");
}
document.addEventListener("dblclick", two);
function two() {
  document.getElementById("double").innerText = "login";
}
document.addEventListener("mouseover", three);
function three() {
  document.getElementById("color").style.backgroundColor = "purple";
  document.getElementById("light").style.color = "purple";
}
document.addEventListener("mouseout", four);
function four() {
  document.getElementById("color").style.backgroundColor = "aqua";
  document.getElementById("light").style.color = "aqua";
}

document.addEventListener("keydown", six);
function six() {
  document.getElementById("color").style.backgroundColor = "black";
  document.getElementById("light").style.color = "white";
}
document.addEventListener("keyup", seven);
function seven() {
  document.getElementById("color").style.backgroundColor = "white";
}
