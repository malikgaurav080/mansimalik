let temperature_in_celcius = 5;
function fahrenheit_converter(temp) {
  let temperature_in_fahrenheit = temp * (9 / 5) + 32;
  console.log("temperature is :", temperature_in_fahrenheit + " F");
}
fahrenheit_converter(temperature_in_celcius);
