/* 
BENZIN ISTASYONU

    1-Dizel: 24.53
    2-Benzin:22.25
    3-LPG:11.1


Gelen müşteriden alacağımız bilgiler:
1-Yakıt tİPİ
2-Yüklenecek yakıt litresi


\r\n alt alta yazmaya yarayan bir yapıdır.
*/

let dizel = 24.53 , benzin = 22.25 , lpg = 11.1;
const newLine = "\r\n";

const yakitMetni = "1-Dizel"+ newLine+ 
"2-Benzin"+ newLine+ 
"3-LPG"+ newLine+
"Yakıt Türünüzü Seçiniz.";

let yakitTipi = prompt(yakitMetni);
if(yakitTipi== "1" || yakitTipi=="2" || yakitTipi=="3"){
let yakitLitre = Number(prompt("Yakıt Litresini Giriniz."));
let bakiye = Number(prompt("Bakiyenizi Giriniz."))

if(yakitTipi == "1"){
     /* diesel */
      let odenecekTutar = dizel*yakitLitre;
      if(odenecekTutar<bakiye){
        //bakiyeniz yeterli
        bakiye = bakiye - odenecekTutar;
        alert("Yakıt alma işlemi başarılı,"+ newLine+ "İyi Yolculuklar Dileriz..."+
        newLine+ "Kalan Bakiye :"+ bakiye );
      }else{
        //bakiye yeterli değil
        alert("Bakiyeniz yeterli değildir." + newLine +
        "Ödenecek Tutar :"+ odenecekTutar+ 
        newLine +
        "Bakiye :" + bakiye+ 
        newLine +
        "Eksik Tutar" + (bakiye-odenecekTutar));
      }

}else if(yakitTipi == "2"){ 
    /* benzin */
     let odenecekTutar = benzin*yakitLitre;
     if(odenecekTutar<bakiye){
        //bakiyeniz yeterli
        bakiye = bakiye-odenecekTutar;
        alert("Yakıt alma işlemi başarılı,"+ newLine+ "İyi Yolculuklar Dileriz..."+
        newLine+ "Kalan Bakiye :"+ bakiye );
      }else{
        //bakiye yeterli değil
        alert("Bakiyeniz yeterli değildir." + newLine +
        "Ödenecek Tutar :"+ odenecekTutar+ 
        newLine +
        "Bakiye :" + bakiye+ 
        newLine +
        "Eksik Tutar" + (bakiye-odenecekTutar));
     }

}else if(yakitTipi == "3"){ 
    /* lpg */
    let odenecekTutar = lpg*yakitLitre;
     if(odenecekTutar<bakiye){
        //bakiyeniz yeterli
        bakiye = bakiye-odenecekTutar;
        alert("Yakıt alma işlemi başarılı,"+ newLine+ "İyi Yolculuklar Dileriz..."+
        newLine+ "Kalan Bakiye :"+ bakiye );
      }else{
        //bakiye yeterli değil
        alert("Bakiyeniz yeterli değildir." + newLine +
        "Ödenecek Tutar :"+ odenecekTutar+ 
        newLine +
        "Bakiye :" + bakiye+ 
        newLine +
        "Eksik Tutar" + (bakiye-odenecekTutar))
        }
    }

}else{
    alert("Lütfen geçerli bir yakıt türü seçiniz.")

}







