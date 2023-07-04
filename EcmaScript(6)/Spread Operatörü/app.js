

//Spread Operatörü- dilimlemek
//... dan sonra ne kadar değer olduğu afarketmez


//Parametre alırken kullanılabilir
let numbers = [ 10, 20, 30, 40]
function add(a,b,c,d){
    console.log(a + b + c + d)
}
//eski yöntem
// add(numbers[0], numbers[1], numbers[2], numbers[3])
add(...numbers) //100


//bir diziyi başka dizi ile bağlamak için kullanılır.
const diller1 = ["Java", "C#"]
const diller2 = ["PhP", "Python"]
//diller2 nin içine diller1 i eklemek istesek 

/* const diller2 = ["PhP", "Python", diller1[0], diller1[1]]

yazardık. */

const dillerNew2 = ["Php", "Python", ...diller1]
console.log(dillerNew2) //(4) ['Php', 'Python', 'Java', 'C#']

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let [x, y] = nums //destructing kullandık yani numsın 0 ve 1inci indeksini a ve bye yazdır.kalan sayılar için şöyle bir şey yapabiliriz.

let[z,q, ...kalanSayilar] = nums
console.log(z, q, kalanSayilar)
//1 2 (7) [3, 4, 5, 6, 7, 8, 9] kalan sayıları array yaptı.

//bir arrayi kopylamak için
const array1 = ["Busra", "Onur", "Lili", "Lulu"]
let array2 = []

//array2 ye array1i kopyalamak istiyoruz tek tek indeks ataması yapmak yerine spread kullanabiliriz.
array2 = [...array1]
console.log(array2) //array2yi consta tanımlarsak const sabit değişken olduğu için sonradan değer ataması yapamayız o yüzden let ile tanımlamak gerekir.

//veya direkt değer atamasını yapabilirdik.
// const array2 = [...array1]
