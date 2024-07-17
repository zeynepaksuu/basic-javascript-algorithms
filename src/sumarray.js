//7.	Bir dizideki sayıların toplamını bulan bir program yazın.

const myArray = [5, 12, 72, 53, 24];

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray(myArray)); 
