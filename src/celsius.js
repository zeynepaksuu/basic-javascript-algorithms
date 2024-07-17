//14.	Celsius'u Fahrenheit'a çeviren bir fonksiyon yazın.

function toFahrenheit(c) {
  let F = (c * 9 / 5) + 32;
  return F;
}
let C = 30;
let F = toFahrenheit(C);
console.log(C + "=" + F);