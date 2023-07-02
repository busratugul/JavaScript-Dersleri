/* Parametreli metod tanımlamak 
Parantezlerin içine paramtreleri alırız.Amacı bu metodu her çağıran kişi TANIMLANAN PARAMETRELERE farklı değer verebilir.Yani kastettiği şey sadece bir şey değildir.
*/

function yaz(isim,soyisim){
    console.log(isim+ " " + soyisim);
}
yaz("Busra","Tugul");
yaz("Onur","Tuğul");



cube(5);
cube(3);
function cube(sayi){
    console.log(sayi*sayi*sayi);
}


let yas = Number(prompt("Yaşınızı Giriniz."));

function check(yas){
    if (yas>=18){
        alert("Ehliyet Alabilirsiniz.");
    }else{
        alert("Ehliyet Alamazsınız.");
    }
}

check(yas);