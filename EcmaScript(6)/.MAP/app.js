
/* 
.map bir array türüdür.İçerisine key,value olarak 2 değer alır.

.set(): mapi set metodu ile doldururuz.
.get() : içinden değerleri alırız. key verip value döner.
.size : mapin uzunluğunu bize söyler.
.delete(): map içinden değer silmektir.
.keys(): bize keyleri döner.Bu output üzerinde foreach ile dönemeyiz.Çünkü array değil önce bunu arraye cevirmeliyiz.
.values(): bize valueleri döner
*/

const map1 = new Map()
//SET buraya istediğimiz tipte değerler verebiliriz. Dizi,obje,booelan hepsi verilebilir.Verilen tiplerin bir önemi yok.
map1.set(1, "Busra")
map1.set(true,5)
map1.set([1,2,3],{firstName : "Busra", secondName :"Tugul"})
map1.set(true,"5")
console.log(map1)


const map2 = new Map()
map2.set(34, "İstanbul")
map2.set(35, "İzmir")
map2.set(06, "Ankara")
map2.set(01, "Adana")
//içindeki değerlere ulaşmak
//GET

console.log(map2.get(6)) //Ankara (sıfır etkili değil)
console.log(map2.get(35)) //izmir
//get metodu ile değer bize dönüyor yani onu bir değişkene atayabiliriz. Zırt pırt bu sekilde kullanmak yerine

//SIZE bu bir property metod olmadıgı için parantez kullanmayız.
let value
value = map2.size
console.log(value)

//DELETE
value = map2.delete(01)
console.log(value) //booelan değer döner yani true döndü demek istiyorki ben adanayı sildim
console.log(map2.size) //3 kaldı

//HAS mapin içinde bir değer var mı?
console.log(map2.has(35)) //evet sahip.. true
console.log(map2.has(01)) //false cunku adanayı sildik.

//FOR OF MAP üzerinde dönebiliriz.Burada destructing de kullanıyoruz.

for(let [key,value] of map2){
    console.log(key,value)
}
/* 34 'İstanbul'
 35 'İzmir'
 6 'Ankara'
 */

 //KEYS
const keys = map2.keys()
console.log(keys) //MapIterator {34, 35, 6}

const key = Array.from(map2.keys())
console.log(key)

key.forEach((key)=> console.log(key)) 

//bunun valuesuna da erişebilmek için

key.forEach((key)=>console.log(key, map2.get(key)))
/*   34 'İstanbul'
     35 'İzmir'
     6 'Ankara' */

for (let key of map2.keys()){
    console.log(key)
}

for (let value of map2.values()){
    console.log(value)
}

//MAPTEN ARRAYE ÇEVİRMEK
const array5 = Array.from(map2);


//ARRAYİ MAPE ÇEVİRMEK

const arr = [[1 , 2] , [3 , 4]]
const myMap = new Map(arr)
console.log(myMap)
const myArray = Array.from(myMap)
console.log(myArray)



