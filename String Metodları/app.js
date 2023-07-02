
let kurs = "Modern Web Geliştirme Kursu";
let tarih ="2022";
/* 
charAt() verdiğimiz index nosundaki karakteri bize döner.
concat() string ile diğer stringi birleştirir.
indexOf() bir elemanın index numarasını döner.
lastindexof() indexof gibidir.
toLowerCase() yazılanları küçük harf yapar.orjinali bozulmaz.
toUpperCase() yazılanları büyük harf yapar.orjinali bozulmaz.
trim() fazla olan spaceleri temizler. cok kullanılır.
slice() 1.parametre nereden başlayacağı,2.parametre nereye kadar alacağıdır. start dahil,end dahil değildir.
substring()slice ile aynı
replace() stringi güncellemedir.değiştiririz.
split() verdiğimiz ayırıcıya gore oradan kesip dizi yapar.
valueOf()
startsWith()verilen değer ile başlıyor mu başlamıyor mu kontrol eder.
endsWith()verilen değer ile bitiyor mu bitmiyor mu kontrol eder.
 */

let karakter = kurs.charAt(5);
console.log(karakter);

let sonuc = kurs.concat(" ",tarih," Büşra");
console.log(sonuc);

let index = kurs.indexOf("W");
console.log(index);

let index1 = kurs.lastIndexOf("Kursu");
console.log(index1);

console.log(kurs);
console.log(kurs.replace("Modern","Güncel"));

console.log(kurs);
let dizi = kurs.split(" ");
console.log(dizi);

