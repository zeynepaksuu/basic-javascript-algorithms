//21.	Bir metindeki her kelimenin ilk harfini büyük yapan bir program yazın.

let metin = "kam bilgi teknolojileri a.ş.";

function turnBig(txt) {

  let words = txt.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }
  return words.join(" ");
}

let metin2= turnBig(metin);
console.log(metin2);
