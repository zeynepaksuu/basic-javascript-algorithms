//23.	Bir dizedeki tekrar eden karakterleri bulan bir program yazın.
//xx
let arr = ['z', 'e', 'y', 'n', 'e', 'p'];

function againfunc(arr) {
  let againfunc = {};
  let againchars= [];

  arr.forEach(function(char) {
      if (againfunc[char]) {
          againfunc[char]++;
      } else {
          againfunc[char] = 1;
      }
  });

  for (let char in againfunc) {
      if (againfunc[char] > 1) {
          againchars.push(char);
      }
  }

  return againchars;
}

let againchars= againfunc(arr);
console.log(againchars);