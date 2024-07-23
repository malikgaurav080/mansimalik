const regex =
  /((\w+:\/\/)[-a-zA-Z0-9:@;?&=\/%\+\.\*!'\(\),\$_\{\}\^~\[\]`#|]+)/gi;
const webUrl = "http://pwskills.com/mansi%210malik";
let result = regex.test(webUrl);
console.log(result);
if (result) {
  console.log("condition matched");
} else {
  console.log("condition not matched");
}
