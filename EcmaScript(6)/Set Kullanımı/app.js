

// Mapler gibi bir array çeşididir. Ancak setlerin farkı şudur. Setin içerisinde bir değeri bir kere tutulur ve key value mantığı yoktur. Geri kalan her şey maplerle aynıdır.

const set = new Set();

//add metodu k: key value mantığı yok aynı diziler gibi.İçerisinde her türden değer tutabilir.
set.add(true)
set.add(3.24)
set.add(777)
set.add("believe")
set.add({username : "Busra", password: "1"})
//set.add([1,2,3,4])

//size : uzunluk ölçer
 console.log(set.size); //6
set.add("believe")
set.add("believe")
console.log(set.size) //yine 6 çünkü bir değer bir kere bulunabilir.

//delete : değer sileriz

set.delete(3.24)
console.log(set.size); //5
//Ancak atadığımız değerlerdeki obje ve arrayi bu yöntemle silemiyorduk. Sebebi bunlar referans tiplerdi.Silebilmek için önce bunları bir değişkene atayıp bir refesansa bağlamamız gerekmektedir.
const num = [1,2,3,4]
set.add(num)
console.log(set)
set.delete(num) //böyle silebiliriz.

//has : var mı
 console.log(set.has("Busra")) //false

 //for of döngüsü


for(let value of set){ //set dizimin içinde dön her bir değeri valueye ata demektir.
    console.log(value)
}
//SETTEN ARRAY OLUŞTURMAK
//değerler, bu şekilde de yazdırabiliriz.
const values = Array.from(set)
console.log(values);
values.forEach((value)=> {
    console.log(value);
})

//Arrayden Set Oluşturmak
let array = [1, "Busra", true, undefined, [1,2,34,5]]

const newSet = new Set(array);

