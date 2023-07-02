/* 
? Veri Tipleri 

1-String 
2-Number
3-Boolean: true ve falsedan oluşur.
4-Null: boş demektir sonra değer atarım diye düşünülen değişkenlere kodlanır ya da içini boşaltmak için de kullanılabilir.
5-Undefined değişken oluşturulmuş ancak veri atamaması yapılmamış
6-Object
7-Function

*/

let isim = "Busra Tugul";
console.log(typeof isim);
console.log(isim);

let sayi1 = 10;
console.log(sayi1);
console.log(typeof sayi1);

console.log(5>2);

let a = 3;
let b= 12;

let sonuc = a+b ;
console.log(sonuc!=15);

let c = null;
console.log(c);

/* object veri tipi s */
let insan = {
    isim : " Büşra",
    soyisim : "TUGUL",
    yas : 25
}
console.log(insan);

let rakamlar = [1,2,3,4,5,6,7];
console.log(rakamlar);

let func = function (){
console.log("Merhaba");
}
console.log(typeof func);
