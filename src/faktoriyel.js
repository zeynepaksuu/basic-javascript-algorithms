//6.	Bir sayının faktöriyelini hesaplayan bir fonksiyon yazın.

function faktoriyel(x) {
  if (x < 0) {
      return "0dan kücük sayıların faktöriyeli hesaplanamaz, pozitif sayı girin";
  } else if (x === 0 || x === 1) {
      return 1;
  } else {
      let result = 1;
      for (let i = 2; i <= x; i++) {
          result *= i;
      }
      return result;
  }
}
console.log(faktoriyel(5)); 