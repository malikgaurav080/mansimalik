const regex =
  /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/gi;
const linkedin_URL = "https://www.linkedin.com/in/benjamin-grant-72381ujy3u";
let result = regex.test(linkedin_URL);
console.log(result);
if (result) {
  console.log("condition matched");
} else {
  console.log("condition not matched");
}
