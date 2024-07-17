function cevirRoma(sayi) {
    const romaHarfleri = [
        { deger: 1000, roma: 'M' },
        { deger: 900, roma: 'CM' },
        { deger: 500, roma: 'D' },
        { deger: 400, roma: 'CD' },
        { deger: 100, roma: 'C' },
        { deger: 90, roma: 'XC' },
        { deger: 50, roma: 'L' },
        { deger: 40, roma: 'XL' },
        { deger: 10, roma: 'X' },
        { deger: 9, roma: 'IX' },
        { deger: 5, roma: 'V' },
        { deger: 4, roma: 'IV' },
        { deger: 1, roma: 'I' },

    ];

    let romasayi= '';

    for (let i = 0; i < romaHarfleri.length; i++) {
        while (sayi >= romaHarfleri[i].deger) {
            romasayi += romaHarfleri[i].roma;
            sayi -= romaHarfleri[i].deger;
        }
    }
    return romasayi;
}
  const sayi = 49;
  const roma = cevirRoma(sayi);
  console.log(`${roma}`);