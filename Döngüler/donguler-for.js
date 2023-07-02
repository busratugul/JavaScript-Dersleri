/* DÖNGÜLER

1- For
2- While
3-Do-While
4-ForEach

FOR DÖNGÜSÜ
for(degisken ; koşul ; arttırma-azaltma){
    
   //kodlar 
}*/

//1'den 10'a kadar yazdıralım.

for(let i=1; i<=10; i++){
    console.log(i);
}

//1den 10a kadar çift sayıları yazdıralım

for(let i=0; i<=10; i+=2){
    console.log(i);
}

//1den 10a kadar tekleri yazdıralım

for(let i=1; i<=10; i+=2){
    console.log(i);
}


//tek ve çift sıralarda metin yazdıralım.
for(let i=1; i<=10; i++){
    if(i%2==1){
        console.log("Büşra");
    }else{
        console.log("Naber")
    }
}

//50den 1 e kadar gidelim ve toplamlarını bulalım.

let = toplam = 0;
for(let i=50; i>=1; i--){
    toplam += i;
    console.log(i);
}
console.log("toplam : ", toplam);