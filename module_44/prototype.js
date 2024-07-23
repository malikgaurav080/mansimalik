let heroes = ["thor", "spiderman"];
let dcheroes = ["batman", "flash", "superman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpidermanPower: function () {
    console.log(`spiderman power is ${this.spiderman}`);
  },
};
console.log(heroPower);
console.log(heroPower.getSpidermanPower());
Object.prototype.mansi = function () {
  console.log("mansi is present in all object");
};
console.log(heroes.mansi());
console.log(heroPower.mansi());
Array.prototype.malik = function () {
  console.log("mansi is only present in array");
};
console.log(heroes.malik());
// // console.log(heroPower.malik());

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const user = {
//   name: "topName",
//   email: "top@gmail.com",
// };
// const teacher = {
//   makeVideos: true,
// };
// const teachingsupport = {
//   isAvailable: true,
// };
// const TAassitant = {
//   makeAssignment: "js assingnment",
//   fulltile: true,
//   // __proto__: teachingsupport,
// };
// // console.log(TAassitant.isAvailable);

// teacher.__proto__ = user;
// console.log(teacher.name);
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // console.log(TAassitant.isAvailable);
// Object.setPrototypeOf(teacher, user);
// console.log(teacher.name);

// String.prototype.trueLength = function () {
//   console.log(`true length is ${this.trim().length}`);
// };

// "mansi malik    ".trueLength();
