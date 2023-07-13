/*  PROMISE Es6 ile geldi

Callbacklerin yerine alternatif olarak çıkmıştır.
Asenkron bir yapıyı senkrona çevirmeye yarar.
1- pending işliyorum
2-fullfield/resolve işlem başarılı
3-rejected red edildi

başarısız ve başarılıları yakalayabilmek için .then() ve .catch() kullanırız. resolve=.then() reject = .catch()
*/

let check = true
const promise1 = new Promise((resolve, reject) => {
    if(check){
        resolve("Promise Başarılı")
    }else{
        reject("Promise Başarısız")
    }
})

console.log(promise1);


let check1 = true
function createPromise() {
    return new Promise((resolve, reject) => {
        if(check) {
            resolve("Promise Başarılı")
        }else {
            reject("Sıkıntı Var")
        }
    })
}

createPromise()
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log("her zaman çalışır"))


//PROMISE XMLHttpRequest ile kullanım


function readStudents(url) {
    return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    try {
        xhr.addEventListener("readystatechange", () => {
            if(xhr.readyState===4 && xhr.status===200){
             resolve(JSON.parse(xhr.responseText))   
            }
        })    
    } catch (error){
        reject(error)
    }

    xhr.open("GET",url);
    xhr.send();
    })
}

readStudents("students.json")
.then((data) => console.log(data))
.catch((error) => console.log(error))


function getUsers(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
          try {
            if(xhr.readyState===4 && xhr.status===200){
                resolve(JSON.parse(xhr.responseText))
            }
          } catch (error) {
            reject(error)
          }
        })
        xhr.open("GET",url);
        xhr.send();
    })
}

getUsers("https://jsonplaceholder.typicode.com/users")
.then((data) => {
    data.forEach((user) => {
        console.log(user.name)
    })
    console.log(data)})
.catch((error) => console.log(error))

//PROMISE.ALL() birden fazla promise varsa onları array olarak veririz ve eğer hepsi resolve ise thene giriyor bir tanesi bile reject ise catche girer.thene girince array olarak bize verir.for veya forEach ile dönebiliriz.
const p1 = Promise.resolve("Birinci promise Başarılı")
const p2 = Promise.resolve("İkinci promise Başarılı")
const p3 = new Promise((resolve,reject)=> {
    resolve("Üçüncü Promise Başarılı")
})
const p4 =Promise.reject("Hata var reiz")
Promise.all([p1,p2,p3,p4])
.then((res) => {
    //console.log(res)
    for(let value of res){
        console.log(value);
    }
})
.catch((err) => {console.log(err)})