/* Geriye değer döndüren metod 

RETURN ile yaparız */

let donenDeger = cube(3);
kareAl(donenDeger);


function kareAl(sayi){
    let sonuc = sayi*sayi;
    console.log(sonuc);
}

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
    console.log("BUsra"); //tanımlanamıyor.
}

/* 
1-Bir değeri metodun dışına taşımak için kullanılır.
2-Bir metodu bitiren anahtar kelimedir. */


