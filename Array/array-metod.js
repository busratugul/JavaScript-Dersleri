/* 
DİZİNİN METODLARI

push    : dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner.
unshift : dizinin başına eleman ekler, eleman sayısını geriye döner.

pop     : dizinin sonuna eleman ekler, eleman sayısını döner.
shift   : dizinin başından eleman siler, eleman sayısını döner.

splice(index,incdex)  : dilediğimiz yere eleman eklemek ve silmek için kullanılır.   

toString  : diziyi stringe çevirebiliriz.
join      : diziyi stringe çevirir. Farkı ise araya eleman ekleyebiliriz.seperator ister yani bölücü - gibi

concat : dizileri birleştirmek için kullanılır.
slice  : (dilimlemek) diziyi istenilen yerden bölüp yeni bir dizi oluştutur.birinci parametre start number, ikincisi end numberdır. amacı seçilen indexten itibaren seçilen de dahil(start), hangi indexe kadar(end) dahil değil yeni diziye karar veririz.
length : dizinin uzunluğunu verir.
reverse :dizinin elemanlarını ters çevirir.orjinal listeyi çevirir.
split   : (bölmek) belirli bir ifadeyi bölüp diziye çevirmek.string bir veriyi belirli separateyi kullanarak bölüp diziye çevirir.
indexOf : elemanın index numarasını verir.
includes: verilen elemanı içeriyor mu ona bakar.

*/

let cars = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let cars1 = ["hyundai", "tofaş"];

 //PUSH METOD
cars.push(["opel"]);
console.log(cars);


//UNSHIFT
cars.unshift("hyundai");
console.log(cars); 

//POP METOD
let silinenEleman = cars.pop();
console.log(cars);
let uzunluk = cars.pop();
console.log(uzunluk)
//

//SHIFT METOD
let silinmisEleman = cars.shift();
console.log(cars);
console.log(silinmisEleman);

//SPLICE METOD(3 parametre alır)
//1. hangi indexten başlayacağı
//2.ne kadar eleman sileceği
//3.eklemek istediğimiz eleman.
console.log(cars);
cars.splice(0,0,"hyundai");
console.log(cars);


cars.splice(1,2);
console.log(cars);  //burada şuradan başla şu kadar eleman sil dedik.

//toStrıng METOD
console.log(typeof cars);
let stringcars = cars.toString();
console.log(typeof stringcars);

//JOIN METOD
let string = cars.join("-");
console.log(string);

//CONCAT METODU
let newcars = cars.concat(cars1);
console.log(newcars);

//SLICE METODU
console.log(cars);
let carslice = cars.slice(0,1);
console.log(carslice);

//LENGTH
console.log(cars.length);

//REVERSE
console.log(cars);
cars.reverse();
console.log(cars);

//SPLIT
 let family = "Busra, Onur, Lily,Lulu";
 let üyeler = family.split (",");
 console.log(üyeler);

 //INDEXOF 
 console.log(cars);
 let car = cars.indexOf("hyundai");
 console.log(car);

 //INCLUDES
 let sonuc = cars.includes("porsche");
 console.log(sonuc);


