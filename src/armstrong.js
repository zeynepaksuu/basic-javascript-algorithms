//19.	Bir sayının Armstrong sayısı olup olmadığını kontrol eden bir program yazın.

function armstrong(x) {

  const numerik = x.toString();
  const length = numerik.length;
  
  let sum = 0;
  for (let i = 0; i < length; i++) {
    const digit = parseInt(numerik[i]);
    sum += Math.pow(digit, length);
  }

  if (sum === x) {
    return true;
  } else {
    return false;
  }
}

const num1 = 153;
console.log(`${armstrong(num1)}`); 
