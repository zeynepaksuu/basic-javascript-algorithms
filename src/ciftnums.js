//16.	Bir dizi içindeki çift sayıları filtreleyen bir fonksiyon yazın.

function filtre(dizi) {
  let ciftler = [];

  for (let i = 0; i < dizi.length; i++) {
      let sayi = dizi[i];
      if (sayi % 2 === 0) {
          ciftler.push(sayi);
      }
  }
  return ciftler;
}

const sayilar1 = [3, 5, 18, 24, 53, 47, 82];
const ciftler = filtre(sayilar1);
console.log(ciftler);