

let dizi1 = [0,1,2];
let dizi = new Array() //bu şekilde de dizi oluşturulabilir.normal parantez kullanılır.nesne türetmek pek tavsiye edilmez.yani bu şekilde kullanmak.


//diziler bir object veri tipidir.

console.log(typeof dizi1);

//foreach: dizilerde kullanıyoruz.

let isimler = ["Büşra", "Onur", "Nesliş", "Feyza", "Belkız"];

//for ile
 for(let i=0; i<isimler.length; i++){
     console.log(isimler[i]);
  } 


  //while ile
let sayac =0;
while(sayac<isimler.length){
    console.log(isimler[sayac]);
    sayac++;
}


//forEach ile
 isimler.forEach(function(isim){
     console.log(isim);
 });
    


