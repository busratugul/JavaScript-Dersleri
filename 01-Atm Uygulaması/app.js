/* 
1-Bakiye Görüntüleme
2-Para Çekme
3-Para Yatırma
4-Çıkış 

ATM UYGULAMASI
*/

let newLine = "\r\n";
let bakiye = 1000;

let metin = 
"1- Bakiye Görüntüleme" +newLine
+"2- Para Çekme"  +newLine
+"3- Para Yatırma" + newLine
+"4- Çıkış" + newLine
+"Lütfen Bir Değer Seçiniz.";

// alert metin

let secim = prompt(metin);
switch(secim){
    case "1":
        alert("Bakiyeniz :" + bakiye);
        break;

    case "2":
        let cekilecekTutar = Number(prompt("Çekmek İstediğiniz Tutarı Giriniz :"));
        if (cekilecekTutar<bakiye){
            //başarılıdır
            bakiye = bakiye - cekilecekTutar;
            alert("Kalan Bakiyeniz :"+ bakiye);
        }else{
            alert("Bakiyenizden Fazla Para Çekemezsiniz!" +newLine
            + "Bakiyeniz :" +bakiye +" " + "Çekilecek Tutar :" +cekilecekTutar);
        }
        break;
    
    case "3":
        let yatacakTutar = Number(prompt(       "Bakiye : " + bakiye+" "+newLine + "Yatırmak İstediğiniz Tutarı Giriniz."));
        bakiye = bakiye + yatacakTutar;
        alert("Güncel Bakiyeniz:" + bakiye);
        break;

    case "4":
        alert("Sistemden Çıkış Yapılmıştır.");
        break;

    default:
        alert("Lütfen Geçerli Bir İşlem Yapınız.")
}

