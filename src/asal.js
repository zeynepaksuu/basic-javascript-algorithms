//10.	Bir sayının asal olup olmadığını kontrol eden bir program yazın.

function asal(sayi) {
  if (sayi <= 1) {
      return false;
  }
  for (let i = 2; i <= Math.sqrt(sayi); i++) {
      if (sayi % i === 0) {
          return false;
      }
  }
  return true;
}
console.log(asal(12)); 
