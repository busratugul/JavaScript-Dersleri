
/* 
FETCH API
servera http isteği atmak için kullandığımız window objesi içinde bir metoddur.Fetch ile bir veri okuduğumuzda bize promise döner.Response tipinde döner then() ile yakalamamız gerekir. ve veriyi okuyabilmek için .json() ile yakalamak gerekir.Bu da promise döner yine than ile yakalamak gerekir.Yakalayınca gerçek veriye ulaşabiliyoruz.
 */


function getStudents(url){
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}

getStudents("students.json")


function getData(url){
    fetch(url) //return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data) )
    .catch((error) => console.log(error))
}

getData("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
//     .then((data) => console.log(data) )
//     .catch((error) => console.log(error)) burada da çağırabiliriz.


//sunucuya fetch() ile veri yükleriz örneğini yapamıyoruz çünkü bir sunucumuz yok ama simüle edersek

// function saveStudents() {
//     fetch("ps://jsonplaceholder.typicode.com/users", {
//         method : "POST",
//         headers : {
//             "Content-Type" : "application/json"
//         },
//         body : JSON.stringify(data)
//     })

// }

