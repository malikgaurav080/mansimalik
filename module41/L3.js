let pattern = "pw";
let regexone = new RegExp(pattern);
let flag = "gi";
let regExtwo = new RegExp(pattern, flag);
let regexthree = /pw/gi;
const strToCheck =
  "PW is growing at a rapid speed and recently they are working on Pwskills tot create skills based pwcontent";
const result = regexthree.test(strToCheck);
console.log(result);
const result1 = strToCheck.match(regexthree);
console.log(result1);
const result2 = strToCheck.replace(regexthree, " p - w");
console.log(result2);

const webUrl = "http://pwskills.com/mansi%210malik";
const url = webUrl.replace(/%\d\d0/, "-");
console.log(url);

// ((\w+:\/\/)[-a-zA-Z0-9:@;?&=\/%\+\.\*!'\(\),\$_\{\}\^~\[\]`#|]+)/gi
