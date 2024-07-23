let dish1_cost = 450;
let dish2_cost = 500;
let dish3_cost = 350;
let totalBill = dish1_cost + dish2_cost + dish3_cost;
let n = 5; //no of peope sharing a dish
function bill_splitter(c1, c2, c3, no_of_peopleSharing) {
  let bill_for_eachPerson = (c1 + c2 + c3) / no_of_peopleSharing;
  console.log("total bill :", c1 + c2 + c3);
  console.log("bill for each person is :", bill_for_eachPerson);
}
bill_splitter(dish1_cost, dish2_cost, dish3_cost, n);
