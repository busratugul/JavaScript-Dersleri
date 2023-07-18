
//büyük harf küçük harf duyarlılığı olmaması için .toLowerCase metodunu yazarız

//charAt metodu metin içinde indekslerde 0,1,2 olarak gezer.




 let metin =prompt("Bir Metin Giriniz");

 let harf = prompt("Harfi Giriniz.");

 let sonuc = bul(harf);

 alert("Harf Sayısı : " + sonuc);



 function bul(harf){
    let toplam =0;
    for(let i=0; i<metin.length; i++){
        if (metin.charAt(i).toLowerCase===harf){
            toplam+=1;
        }
    }
    return toplam;
 }