let color1;
let color2;

let case1 =
  (color1 == "red" && color2 == "blue") ||
  (color1 == "blue" && color2 == "red");
let case2 =
  (color1 == "red" && color2 == "yellow") ||
  (color1 == "yellow" && color2 == "red");
let case3 =
  (color1 == "blue" && color2 == "yellow") ||
  (color1 == "yellow" && color2 == "blue");
let combination = "case1";
switch (combination) {
  case "case1":
    console.log("purple");
    break;
  case "case2":
    console.log("orange");
    break;
  case "case3":
    console.log("green");
    break;
  default:
    console.log("invalid color combination");
}
