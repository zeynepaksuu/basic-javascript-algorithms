//15.	Bir sayının tam bölenlerini bulan bir program yazın.

let sayi = 12;
let arr= bölenleribul(sayi);

function bölenleribul(nums) {
  let arr = [];

  for (let i = 1; i <= nums; i++) {
    if (nums % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(arr);