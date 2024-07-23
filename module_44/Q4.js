class employee {
  name;
  positon;
  salary;
  constructor(name, positon, salary) {
    this.name = name;
    this.positon = positon;
    this.salary = salary;
  }
  getsSalary() {
    return `employee salary: ${this.salary}`;
  }
}
let E = new employee("mansi", "HR", 80000);
console.log(E.getsSalary());
