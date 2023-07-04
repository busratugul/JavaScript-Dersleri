

//ARROW FUNCTION


/* function yazdir(){
    console.log("Merhaba")
} */

const yazdir = ()=>{
    console.log("Merhaba")
}
yazdir()

const yazdir2 = (firstname)=>{
    console.log("Merhaba",firstname )
}
yazdir2("Busra")

const yazdir3 = (firstName, lastName) =>{
    console.log("Merhaba", firstName,lastName)
}
yazdir3("Busra", "Tugul")

//eğer tek satırda tanım yapabiliyorsak kıvırcık parantezlere ihtiiyaç yoktur.
const yazdi3r = (firstName,lastName)=> console.log("Merhaba",firstName, lastName)

yazdi3r("Onur","Tuğul")
//Bir satırdan fazla kodlarda sırası ile çalışması için kıvırcıkları silemeyiz.
const yazdir4 = (firstName, lastName)=>{
    console.log("Merhaba",firstName,lastName)
    let a = 5
    console.log(a)
    console.log("Onur")
}

yazdir4("Busra","Tugul")

//Bir arrow functionun parametresi 1 taneden oluşuyorsa ()leri de silebiliriz.
const yazdir5 =firstName=>console.log("Merhaba",firstName)
yazdir5("Busra")


/* let kupAl = (x) =>{
    return x*x*x
}
console.log(3) */

let kupA = x => x*x*x
console.log("Değer ", kupA(3))

