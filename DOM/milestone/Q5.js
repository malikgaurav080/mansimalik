function capitalized(sentence) {
  let str = sentence.split(" ");
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
  }
  return str.join(" ");
}
console.log(capitalized("my name is mansi malik"));
