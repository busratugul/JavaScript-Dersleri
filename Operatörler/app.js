/*  ATAMA OPERATÖRLERİ

= Atama operatörüdür, eşittir değildir.
+ artı ya da toplanamayan öğeler de yanyana birleştirme yazdırmadır.
    string + number = stringnumber
 
- matematik ile aynı
* çarpma işlemi

değişken isimleri türkçe karakter içermemelidir. birleşik olarak tanımlanmalıdır.ilk karakter sayı içeremez.bir yazı standartı olarak iki kelime varsa ikinci kelime büyük harfle başlar.

/ bölme 

% mod alma operatörüdür.

++ 1 arttırmak için kullanılır.

** üssünü almak için kullanılır.

&& ve operatörüdür.birden çok ihtimal vardır ve hepsinin sağlanması gerekiyordur.

|| veya operatörüdür. 1 tanesinin bile true olması yeter.

! değil operatörüdür.bir şeyin zıttını almak için de kullanılır.
*/




let a= "büşra";
console.log(a);

let not1 = 60;
let not2 = 70;

let sayi1 = "5";
let sayi2 = 2;
let sayi3 = 5;

console.log(sayi1+sayi2);
console.log(sayi3+sayi2);


let puan1 = 100;
let puan2 = 70;
let sonuc = (puan1 + puan2)/2;
console.log(sonuc);

console.log(10%3);
console.log(12%5);

let number = (10);
number++;
number++;
number--;
console.log(number);

console.log(2**3);

let yas = 20;
let para = 3500;
let saglikliMi = false;

console.log(yas>18 && para>3000 && saglikliMi == true);

console.log(yas>18 && para>3000 || saglikliMi == false);

console.log(5>3 || 2<3);

console.log(5>3);
console.log(  !(5>3) );

/*let yas = 20;
let para = 3500;
let saglikliMi = false;*/
let hakSayisi =  3;

console.log((para>3000 && hakSayisi>1) || (yas>18 &&saglikliMi));


/* KARŞILAŞTIRMA OPERATÖRLERİ

== eşit mi (veri tipi farketmeksizin)
!= : eşit değildir mi?
> : büyük mü
< : küçük mü
>= büyük eşit mi
<=küçük eşit mi
*/

console.log(5==3);
console.log(5!=3);

let age = 23;

console.log(yas!=23);