

//FOR IN - FOR OF

let names = ["Busra", "Onur", "Lili", "Lulu"]

/* Klasik Yöntem
names.forEach(function(name){
    console.log(name)
}) */


//Arrow Function ile
/* names.forEach((name)=>{
    console.log(name)
}) */ //array alt alta yazıldı

//kısaltalım
names.forEach(name=>console.log(name))

//FOR IN dongusu
//bir dizide döner ve bize dizidekilerin indekslerini verir.for in indexin kısaltması bize index verir.

//letten sonra değişken tanımlama sonra in sonra dizi
for(let name in names){
    console.log(name)
} //alt alta 0,1,2,3 yazdı

//indexlerinden değerlerine şu şekilde ulaşırız.
//console.log(name, names[name]) indexler ve yanında değerlerle çıktı verir.

//FOR OFF Dongusu
//listenin değerlerini verir

for(let isim of names){
    console.log(isim)
}
/* eğer burada değerlerin yanında indexlerini de almak istersek o zaman
for(let isim of names){
    console.log(isim, names.indexOf(isim))
}
 */