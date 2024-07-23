// let age = 14;
// if (age >= 18) {
//   console.log("you are allowed to vote");
// } else {
//   console.log("you are not allowed");
// }

let signal = "green";
if (signal == "red") {
  console.log("stop");
} else if (signal == "yellow") {
  console.log("ready to go");
} else {
  console.log("go");
}

let user = "student";
switch (user) {
  case "admin":
    console.log("he is admin");
    break;
  case "student":
    console.log("he is student");
    break;
  case "teacher":
    console.log("he is teacher");
    break;
  default:
    console.log("default syntax");
}
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// while loop
let x = 5;
while (x <= 10) {
  console.log(x);
  x++;
}
// do while loop
let a = 11;
do {
  console.log(a);
  a++;
} while (a <= 15);

let islogin = false;
islogin ? console.log("home page") : console.log("login page");
