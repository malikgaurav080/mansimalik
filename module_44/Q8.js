let student = {
  name: "mithun",
};
Object.prototype.printdetails = function () {
  console.log("hello my name is ", this.name);
};
student.printdetails();
