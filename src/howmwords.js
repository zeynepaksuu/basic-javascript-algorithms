//9.	Bir cümledeki kelime sayısını bulan bir fonksiyon yazın.

const cumle = "kam bilgi teknolojileri a.ş.";

function findfunc(cumle) {

  const words = cumle.split(' ');
 
  const word = words.filter(function(word) {
      return word !== '';
  });

  return word.length;
}
console.log(findfunc(cumle)); 