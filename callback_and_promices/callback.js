function h(x, fun) {
  console.log(x * x);
  fun();
}
h(10, function () {
  console.log("done with callback");
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("start");
// setTimeout(function f() {
//   console.log("set time done");
// }, 3000);
for (let i = 0; i < 1000000000; i++) {}
console.log("end");
