function random(min, max) {
  let cons = Math.floor(Math.random() * 100);
  console.log("randon number is :", cons);
}
let counter = 4;
const time = () => {
  counter -= 1;
  console.log(`${counter} second(s) left`);
  if (counter === 1) {
    counter = 4;
    random();
  }
};
const intervalID = setInterval(time, 1000);
