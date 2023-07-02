/* 
Element Silme

*/


const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll("list-group-item");
//bu bir listedir.
//liste elemanlarını indeksleri ile silebiliriz.
todos[0].remove();//direkt 0. indeksi uçurabiliriz.
todos[1].remove();//tekrar silebiliriz.


todos[todos.length-1].remove();
//son çocuğu sileriz.





const todo1 = document.querySelector(".list-group-item");//burada itemlardan birincisini seçtik.
todo1.remove(); //direkt seçtiğimizi de silebiliriz.


//Anneleri üzerinden çocukları silmek
todoList.removeChild(todos[0])//removeChild indeks değil çocuk istiyor.DİKKAT!!! Ama çocuğun içindeki çocukların indeksini girebiliriz.
todoList.removeChild(todos[todos.length-1]);
//son çocuğu silebiliriz.
todoList.removeChild(todoList.lastElementChild);