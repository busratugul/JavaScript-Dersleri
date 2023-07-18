

/* 
FAKTORIYEL HESAPLAMA
 */

let sayi = Number(prompt("Bir Sayı Giriniz."));
let carpim = 1;

for(let i=1; i<=sayi; i++){
    carpim = carpim*i;
}
alert("Bu Sayının Faktöriyeli : " + carpim );