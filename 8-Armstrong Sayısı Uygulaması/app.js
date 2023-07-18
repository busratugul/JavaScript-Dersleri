

/* 

ARMSTRONG= her bir rakamının küpünün toplamı kendisini veriyorsa bu tür sayılara armstrong denir.

153 - 370 - 407 gibi sayılar.

*/

let sayi = prompt("Sayı Giriniz.");
let toplam = 0;

for(let i=0 ; i<sayi.length ; i++){
    let rakam = sayi.charAt(i);
    toplam += rakam*rakam*rakam;
}
if(sayi==toplam){
    alert(sayi + " , armstrong sayısıdır.");
}else{
    alert(sayi + " , armstrong sayısı değildir.");
}
