

//KLAVYE EVENTLARI

//keypress klavyeden bir tuşa basıldığında on yakalamak için kullanılır.Ama dezevantajı sadece harf ve sayılarda tetiklenir.

//keydown klavyedeki her şeyi algılar.Bastığımızda çalışır.

//keyup Tuştan elini kaldırdığında çalışır.Tüm klavyeyi alfılar.





document.addEventListener("keypress",run);

function run(e){
    console.log(e.key);
}
//klavyede bastığımız tışları bu şekilde yakalayabiliriz.

function run(e){
    console.log(e.keyCode);
}
//klavyeden basılan değerin ascii tabledan karşılığını döner. console.log(e.which); de aynı değeri verir



//Kullanıcı f5e bastığında sayfa yenilemesini engelle
document.addEventListener("keydown",run);

function run(e){
    console.log(e.keyCode);
    if(e.keyCode == 116){
        alert("Sayfa Yenileme Engellendi.")
    }

    e.preventDefault();//engelleme fonksiyonu
}


const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("todoName");

input.addEventListener("keyup",info);

function info(e){
    cardTitle.textContent = e.target.value;
}