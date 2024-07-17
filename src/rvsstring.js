//18.	Bir metni tersine çeviren bir fonksiyon yazın.

function func(metin) {
  const ters = metin.split('').reverse().join('');
  return ters;
}
const metin1 = "zeynep aksu";
const ters = func(metin1);
console.log(metin1);
console.log(ters);