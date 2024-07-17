//11.	Fibonacci serisinin ilk 10 elemanını yazdıran bir program yazın.

function fibonacci(n) {
  let fibSeries = [0, 1];

  for (let i = 2; i < n; i++) {
      fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }
  return fibSeries;
}
const fibonacciSeries = fibonacci(10);
console.log(fibonacciSeries);