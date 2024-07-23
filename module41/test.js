const itemsInUSD = {
  apple: 1,
  banana: 0.5,
  orange: 0.75,
  milk: 2,
  bread: 1.5,
};

const exchangeRate = 80;

const convertPricesToINR = (prices, rate) => {
  return Object.fromEntries(
    Object.entries(prices).map(([item, price]) => [item, price * rate])
  );
};

const itemsInINR = convertPricesToINR(itemsInUSD, exchangeRate);

console.log(itemsInINR);
