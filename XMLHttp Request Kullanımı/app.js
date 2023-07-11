/* 
REST API nedir? Bir web servisidir.Httpi üzerinden rest servise istek atılır.Oradan bize cevap gelir.Httpi protokolu (link) üzerinden istek atarsınız. */

function prepareURL(url,id){
    if(id===null){
        return url;
    }
    return `${url}?postId=$(id)`
}


function getComments(url,id) {
    let newURL = prepareURL(url,id);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText);
        }
        //string olarak değil de json olarak dönmesini istersek eğer console.log(JSON.parse(xhr.responseText));

    })
    xhr.open("GET", newURL)
    xhr.send()
}

getComments("https://jsonplaceholder.typicode.com/comments",null   )