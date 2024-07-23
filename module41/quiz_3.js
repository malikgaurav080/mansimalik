const itemsInUSD = {
  apple: 1,
  banana: 3,
  orange: 5,
  milk: 2,
  bread: 6,
};
const rate = 80;
function convert_price(itemsInUSD, rate) {
  return Object.fromEntries(
    Object.entries(itemsInUSD).map(([key, val]) => [key, val * rate])
  );
}
console.log(convert_price(itemsInUSD, rate));
