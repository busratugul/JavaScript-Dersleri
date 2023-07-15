//fetchler .then helline dönüşebiliyor o yüzden modern kullanım async await daha yalın okunabilir temiz kod sunar.

//await keywordu kullanırken onu kullandığımız bodynın functionunu acync ile işaretlemek zorundayız.


async function hello() {
    return "Hello"
}

// console.log(hello()); //asyn ile işaretlenen function bize promise döner.  

hello()
.then(res => console.log(res))

/* document.querySelector("button").addEventListener("click",() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response) => response.json())
        .then((comments) => console.log(comments))
    })
}) */

//ASYNC AWAIT
 /* document.querySelector("button").addEventListener("click", async () => {
    const resPost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const post = await resPost.json();

    const resComment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)

    const comments = await resComment.json()
    console.log(comments);

}) */

//DAHA DA KISALTILMIŞ HALİ
document.querySelector("button").addEventListener("click", async () => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()

    const comm = await (await fetch (`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()

    console.log(post,comm);

})