/* 

VERİLER

strings, numbers, booleans, underfined, null

object, function

*/

//String veri tipinden  number veri tipine çevirme
let b = "10";
let c = Number(b);
console.log(typeof c);
console.log(typeof b);

//parseInt()    pardeFloat()

let d = 8;
let e = "6";
let f = parseInt(e);
console.log(typeof e);
console.log(typeof f);

let g = "12.5";
console.log (parseFloat(g)); //12.5
console.log (parseInt(g)); //12

//numberdan stringe dönüştürmek  // .toString

let x = 55;
console.log(typeof (55));
let y = String(55);
console.log(typeof (y));
let z = (x).toString();
console.log(typeof (z));

//boolean tipindeki bir değer de stringe çevirilebilir.


console.log(typeof(true));
let sonuc = String(true);
console.log(typeof(sonuc));


// sayı olmayan şeyler number olamaz.NaN (not a number) hatası gelir.


//Object nesneleri diziler gibi, stringe çevirilebilir.
let rakamlar =[1, ,2 , 3, 4, 5];
console.log(typeof (rakamlar)); //object tipinde.
let rakamlarS = String(rakamlar);
console.log(typeof(rakamlarS));

//array NaN hatası verir.

let rakamlarN = Number([1,2,3,4,5]);
console.log(rakamlarN); // NaN
console.log(typeof(rakamlarN));

