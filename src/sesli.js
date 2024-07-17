//13.	Bir metindeki sesli harfleri sayan bir program yazın.

const metin= "zeynep aksu";
const toplam = sesliler(metin);

function sesliler(metin) {
  const harfler = /[aeıioöuüAEIİOÖUÜ]/g;
  const array = metin.match(harfler);

  return array.length;
}
console.log(toplam);
