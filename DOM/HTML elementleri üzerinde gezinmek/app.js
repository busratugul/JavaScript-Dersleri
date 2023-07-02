/* 

HTML elementleri üzerinde gezinmek

*/

const todo = document.querySelector(".list-group-item");//çocuk
const todoList = document.querySelector(".list-group");//anne
const todoLastChild = document.querySelectorAll(".list-group-item:nth-child(4)");
const card = document.querySelector(".card");

const row = document.querySelector(".row");




//Anneden çocuklara erişmek


let value; //CHILDREN
value = todoList;
value = todoList.children;//çocuklara array olarak erişir.Endeksli istiyorsak [2] gibi yazarız.
value = todoList.children[2];
value = todoList.children[todoList.children.length-1];
//sonuncu çocuk bu şekilde yakalanabilir.
value = todoList.children;
value = todoList.children[3].textContent = "Değişti";

value =Array.from[todoList.children];//çocukları array yaptık
value.forEach(function(todo){
    console.log(todo.textContent);//içinde dönüp textcontentini yazdırabiliriz.
})




//Çocuktan Anneye Erişmek


value = todo; //PARENTELEMENT
value = todo.parentElement;
//sen bana anne elementini getir demektir
value = todo.parentElement.parentElement;
//annenin de annesini alabiliriz.bu şekilde annenin de annesini onun da annesini almaya devam edebiliriz.
//ya da tek tek kodlarız.
value = todo;
let ul = todo.parentElement;
let cardbody = ul.parentElement;
let cardElement = cardbody.parentElement;
let row1 = cardElement.parentElement;
let container = row.parentElement;
//ayrı ayrı işlemler yapacaksak bu şekilde kodlanır.


//Kardeşler arasında gezinmek
value = todo;
value = todo.nextElementSibling;//sibling kardeş demek yani bir sonraki kardeşini getir demektir.
//bir sonraki bir sonraki içinde sürekli ard arda yineleyebiliriz. parentElement de olduğu gibi.

value = todoLastChild;
value = todoLastChild.previousElementSibling;
//bir önceki kardeşine git demektir.


let value2 = row.children[0].children[3].children[0].textContent = "ToDo Listesi Başlığı Değişti";








console.log(value);