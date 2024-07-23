let original_price = 1250;
let discounted_price = 875;
const discount = (x, y) => {
  let discount = 100 - (y / x) * 100;
  console.log("total discount :", discount + "%");
};
discount(original_price, discounted_price);
