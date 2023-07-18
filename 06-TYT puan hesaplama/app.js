/* 
? Sorular
1- Türkçe 40
2-Matematik 40
3-Sosyal Bilimler 20
4-Fen Bilimleri 20

100 puanı ÖSYM veriyor
Okul puanı max. 60 puan veriyor.
*/

let turkceDogru , turkceYanlis = 0;
let matematikDogru, matematikYanlis = 0;
let sosyalDogru , sosyalYanlis = 0;
let fenDogru , fenYanlis = 0;
let puan = 0;
let okulPuani = 0;



let newLine = "\r\n";
let mesaj = "TYT Puan Hesaplama Uygulamasına Hoşgeldiniz!" +newLine
    + "1- Puan Hesapla" +newLine
    + "2- Çıkış Yap";

let secim = prompt(mesaj);

switch(secim){
    case "1": 
    okulPuani = Number(prompt("Okul Puanınızı Giriniz."));
    turkceDogru = Number(prompt("Türkçe Doğru Sayısını Giriniz."));
    turkceYanlis = Number(prompt("Türkçe Yanlış Sayısını Giriniz."));

    matematikDogru = Number(prompt("Matematik Doğru Sayısını Giriniz.")) 
    matematikYanlis = Number(prompt("Matematik Yanlış Sayısını Giriniz."));

    sosyalDogru = Number(prompt("Sosyal Doğru Sayısını Giriniz."));
    sosyalYanlis = Number(prompt("Sosyal Yanlış Sayısını Giriniz."));

    fenDogru = Number(prompt("Fen Doğru Sayısını Giriniz."));
    fenYanlis = Number(prompt("Fen Yanlış Sayısını Giriniz."));

    let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
    let yanlisSayisi = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
    let net = dogruSayisi  - (yanlisSayisi/4);
    puan = (net * 4) + 100 + okulPuani;

    alert("TYT PUANINIZ :" + puan +newLine
            +"TEBRİKLER...");
    
    break;

    case "2":
        alert("Uygulamadan Çıkış Yapılmıştır.");
        break;

    default:
        alert("Geçersiz İşlem !!!");
        break;
}

