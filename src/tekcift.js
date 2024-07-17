//3.	Bir sayının çift mi tek mi olduğunu kontrol eden bir program yazın.

function control(number) {
  if (number %2 ===0){
    return "cift";
  }
  else {
    return "tek";
  }
}

let number = 12;
console.log (`${number} sayısı ${control(number)}sayıdır.`);