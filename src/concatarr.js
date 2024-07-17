//24.	İki diziyi birleştiren ve sıralayan bir fonksiyon yazın.

const dizi1 = [3, 5, 8, 10];
const dizi2 = [12, 14, 16, 18];
function birlestirsirala(dizi1, dizi2) {
  const yeniDizi = [...dizi1,...dizi2];
  yeniDizi.sort((a, b) => a - b);

  return yeniDizi;
}
const sonDizi = birlestirsirala(dizi1, dizi2);
console.log(sonDizi);