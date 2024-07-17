//27.	Verilen bir sayının mükemmel sayı olup olmadığını kontrol eden bir program yazın.

let sayi = 496;

function mukemmel(num) {
  if (num <= 1) return false;
  let sum = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

if (mukemmel(sayi)) {
  console.log("true");
} else {
  console.log("false");
}