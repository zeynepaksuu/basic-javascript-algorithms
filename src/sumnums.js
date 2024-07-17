//22.	Verilen bir sayıya kadar olan sayıların toplamını hesaplayan bir fonksiyon yazın.

const sayi = 10;

function toplam(x) {
  let sum = 0;
  for (let i = 1; i <= x; i++) {
      sum += i;
  }
  return sum;
}

const result = toplam(sayi);
console.log(result);