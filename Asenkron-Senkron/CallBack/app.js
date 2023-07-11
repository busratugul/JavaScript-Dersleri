/* CALLBACK eski bir yöntemdir.Artık pek kullanılmamaktadır. Ancak ne olduğunu bilmemiz gerekmektedir.Callback Hell diye bilinir. */

//Bir fonksiyonu bir fonsiyona parametre geçerek senkrona çevirmektir.Parametrenin isminin bir önemi yoktur her şey olabilir.



function getname(callback){
    setTimeout(() => {
        //servisten ismimi getirdi.
        console.log("Onur");
        callback();
    }, 1000);
}

function getSurName(){
    setTimeout(() => {
        console.log("Tgl");
    }, 500);
}

getname(getSurName)

// getName();
// getSurName();

//callbacki paramtere kullanarak dinamik olarak da kodlayabiliriz.

function getName(callback){
    setTimeout(() => {
        //servisten ismimi getirdi.
        let name = "Busra"; //Web servisinden geldi
        callback(name)
    }, 1000);
}

function getSurname(name,callback){
    setTimeout(() => {
        let surname = "Tugul"; //Web servisinden geldi
        callback(surname)
    }, 500);
}

function getAge(name,surname,callback){
    setTimeout(() => {
        let age = 25 ; //ismi busra soyismi tugul olanın yaşını servisten getirdi.
        callback(age)
    }, 300);
}
//getName(getSurname)

getName((name) => {
    getSurname(name, (surname) => {
        getAge(name, surname, (age) => {
            console.log(name, surname, age);
        })
    })
})