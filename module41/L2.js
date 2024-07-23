// for each
let arr = [2, 3, 4, 5, 6];
arr.forEach(function (Element, index, arr) {
  console.log(Element, index, arr);
});

// arrow based function
arr.forEach((no, mansi, ar) => {
  console.log("hlo " + no, mansi, ar);
});
const name = ["mansi", "malik", "neha", "msjksk"];
name.forEach((Element) => {
  console.log(Element.toUpperCase());
});

// MAP
arr.map((Element, index, arr) => {
  console.log("hlo " + Element, index, arr);
});
name.map((Element) => {
  console.log(Element.toUpperCase());
});

// filter
const heroes = ["nagraj", "ashgayd", "ahgd", "maniraj"];
console.log(heroes);
const heroWithRaj = heroes.filter((Element) => {
  return Element.endsWith("raj"); ///return is mandatory to use here
});
console.log(heroWithRaj);

// reduce
const cart = [20, 45, 55, 50];
const total = cart.reduce((prev, curr) => prev + curr, 0);
console.log(total);

// every
const score = [200, 300, 150, 250];
const scoreCheck = score.every((v) => typeof v === "number"); //typeof returns the value in string form sot type of should be of tye "number"
console.log(scoreCheck);
// find
const above200 = score.find((score) => score > 200);
console.log(above200);
