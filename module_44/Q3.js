class car {
  company;
  model;
  year;
  constructor(c, m, y) {
    this.company = c;
    this.model = m;
    this.year = y;
  }
  getDescription() {
    console.log("this is a", this.year, this.company, this.model);
  }
}
let c = new car("skodaa", "rapid", 2020);
c.getDescription();
