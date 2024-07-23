let input =
  "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent";
const reversing_string = (input) => {
  let str = input.split(" ");
  str = str.reverse();
  return str.join(" ");
};

function one() {
  console.log("reversed string : " + reversing_string(input));
}
setTimeout(one, 2000);
