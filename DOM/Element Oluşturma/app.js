

//Dinamik Olarak Etiket Oluşturmak .CREATEELEMENT

const cardBody =   document.querySelectorAll("card-body")["1"];
console.log(cardBody);
const todoList = document.querySelector(".list-group");

const link = document.createElement("a");
link.id="goBlogSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "https://www.youtube.com/watch?v=nrFX9-WhCco&list=PLURN6mxdcwL86Q8tCF1Ef6G6rN2jAg5Ht&index=68&ab_channel=EnesBayram";
link.target = "_blank";
link.text = "Bu Derse Git";

cardBody.appendChild(link);
//çocuklarının en sonuna bu çocuğu da ekle demektir.


//aslında aynı html gibi bir kodlama yapıyoruz


const todo = document.createElement("li");
const todoLink = document.createElement("a");
const i = document.createElement("i");

todo.className = "list-group-item d-flex justify-content-between";
todo.innerHTML = "todo 5";

todoLink.href = "#";
todoLink.className = "delete-item";

i.className = "fa fa-remove";

//elementleri hazırladıktan sonra matruşka gibi küçükten büyüğe iç içe koyarız.

todoLink.appendChild(i);
todo.appendChild(todoLink);
todoList.appendChild(todo);

