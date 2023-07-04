
//Destructing
//Arraylerde [] , objectlerde {} çünkü arrayleri [], objeleri{} karşılar.Neyi karşılamasını istiyorsak ona göre.


let langs = [ "C#" , "C++", "JavaScript", "Python"]
let lang1, lang2, lang3, lang4

/* lang1 = langs[0]
lang2 = langs[1]
lang3 = langs[2]
lang4 = langs[3] UZUN YOL*/

[lang1, lang2, lang3, lang4]= langs
console.log(lang1, lang2, lang3, lang4)
//C# C++ JavaScript Python

const calculate =(a,b)=>{
    const plus = a+b
    const minus = a-b
    const times = a*b
    const divide = a/b

    const dizi = [plus, minus, times, divide]
    return dizi
}
let [a, b, c, d] = calculate(10,2)
console.log(a,b,c,d)  //12 8 20 5 

//objelerde kullanımı

const person = {
  first : "Büşra",
  last : "Tuğul",
  salary :  45000,
  age : 28
}
/* let isim, soyisim, maas, yas
isim = person.first
soyisim = person.last
maas = person.salary
yas = person.age
console.log(isim, soyisim, maas, yas)  BU UZUN YOL*/

let {first, last, salary, age} = person
console.log(first, last, salary, age)

//ben burada değişken ismini de değiştirmek istiyorum dersek eğer:
/* let {first:isim, last:soyisim, salary:maas, age:yas} = person
console.log(isim, soyisim, maas, yas) */