//12.	Bir dizideki en büyük sayıyı bulan bir fonksiyon yazın.

const sayilar = [5, 12, 18, 3, 42, 53];

function buyuk(dizi) {
    let big = dizi[0];
    for (let i = 1; i < dizi.length; i++) {
        if (dizi[i] > big) {
            big = dizi[i];
        }
    }
    return big;
}
console.log(buyuk(sayilar)); 