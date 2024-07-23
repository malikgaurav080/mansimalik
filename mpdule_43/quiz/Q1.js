function number_of_words(string) {
  let words = string.split(" ");
  let map = new Map();

  for (let word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }
  return map;
}
const string = "i am mansi malik, i am the student of b.tech CSE";

console.log(number(string));
