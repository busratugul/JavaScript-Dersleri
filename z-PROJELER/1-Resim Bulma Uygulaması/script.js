const formWrapper = document.querySelector(".formWrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButoon = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imagelist-wrapper");

runEventList()

function runEventList() {
    form.addEventListener("submit", search)
}
function search(e) {

    const value = searchInput.value.trim()
    // linkteki soru işareti @RequestParam - Spring- Rest API urlden parametre değer geçirmek için kullanılır.
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
            Authorization : "Client-ID r6-bbEJkR-fkFeHSRr47q0mR3793hsLWQORYSfzziOQ "
        }
    })
    .then((res) => res.json())
    .then((data) => {
        Array.from(data.results).forEach((image) => { console.log(image.urls.small)
        })

    })
    .catch((err) => console.log(err))

    e.preventDefault(); //sayfa refresh oldugunda içerik silinmesin diye sayfa yönlendirmesini kapatırç.
}

function addImageToUI(url) {
    
}