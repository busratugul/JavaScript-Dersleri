/* Asal Sayı Bulma Uygulaması */


//Bir sayıyı kendisinin yarısına kadar olan sayılara böleceğiz. eğer bölünüyorsa asal değildir ama bölünmüyorsa asaldır. Peki neden yarısına kadar olan sayılara böldük? örn;
//14 = 2,3,4,5,6,7 den sonrası zaten tam sayı olarak bölmez. Boşa işlem yaptırmaya gerek yok.

//let no = Math.floor(7.9);
//bu Math.floor metodu sayı yuvarlamaya yarar.


let sayi = Number(prompt("Lütfen Bir Sayı Giriniz: "));
let sonuc = true;

for(let i = 2 ; i<= Math.floor(sayi/2) ; i++){
    if(sayi %i==0){
        //Asal Değildir.
        sonuc = false;
        break;
    }
}
if(sonuc){
    alert(sayi + " asaldır.");
}else{
    alert(sayi + " asal değildir.");
}