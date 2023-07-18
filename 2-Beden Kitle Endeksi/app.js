


let kilo = Number(prompt("Kilonuzu giriniz."));

let boy = Number(prompt("Boyunuzu metre cinsinden yazınız."));

 let sonuc = kilo/(boy*boy);

 if(sonuc<18.5){
    alert("İDEAL KİLONUN ALTINDASINIZ...")
 }else if (sonuc>=18.5 && sonuc<=24.9){
    alert("İDEAL KİLODASINIZ...")
 }else if (sonuc>=25 && sonuc <=29.9){
    alert("İDEAL KİLONUN ÜSTÜNDESİNİZ...")
 }else if (sonuc>30 && sonuc <=39.9){
    alert("OBEZSİNİZ..." + sonuc) 
 }else if(sonuc >=400){
    alert("MORBID OBEZSİNİZ...")
 }

 