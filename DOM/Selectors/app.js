

/* SELECTORS 

classname , id  , tag name 

getElementById: idye göre elementi yakalar 
getElementByClassName : class ismine göre yakalar
getElementByTagName : etiket ismine göre yakalar.*/


let value;

value = document.getElementById(todoAddButton);
//idsi todoAddButton olan elementi





console.log(value);
console.log(button.id);//bize idsini gösterir
console.log(button.getAttribute(id));//bu şekilde de idsini alabiliriz.

console.log(button.className);//classını verir.
console.log(button.getAttribute("class"));

//classlisti bir liste olarak çekmek istersek;
const classListesii = button.classList;//[3] gibi bir değerle kaçıncı classı çekmek istersek çekebiliriz.
console.log(classListesi);


//buton içindeki class listesini al aldığn listeyi dön ve hepsini classname içinde tut diyebiliriz.
const classListesi = button.classList;
classListesi.forEach(function(className){

})

let buttonText = button.textContent ;//string olarak içindeki metni alır
let buttonText2 = button.innerHTML;//o metnin kenarlarında html etiketi varsa onları da alır mesela
button.text.textContent="<b> todo ekleyin </b>";
//buradaki bleri de algılar .innerHTML bunun ile yazarsak yazı kalın olur ancak textContent b leri de string bir metin olarak algılar.

console.log(buttonText);

//class ismine göre yakalamak

const todoList = document.getElementsByClassName("list-group-item");
console.log(todoList);
//kaç tane bu class ismine sahip etiket varsa hepsini yakalar.


//idye uygulanan her sey classa da uygulanabilir array yapıp foreach ile dönmek gibi.

const todoListt = todoList.classList;
todoList.forEach(function(todo){
    console.log(todo);
})

console.log(todoList)


//tagname ile yakalamak

const forms = document.getElementsByTagName("form");
console.log(forms); //[2] gibi sayılarla kaçıncısını istiyorsak yazabiliriz. .name .id ile bunların id ve namei alınabilir.yine bunları array yapıp foreach ile dönebiliriz.

const formss = Array.from(document.getElementsByTagName("form"));
forms.forEach(function(form){

})

//lileri getirelim

const liler = document.getElementsByTagName("li");
console.log(li);




/* getElementById / getElementByClassName/ getElementByTagName bu üçünün yaptığını 
quarySelector - quarySelectorAll 
ile yapabiliyoruz.  */

const clearButoon = document .querySelector("#todoClearButton");
console.log(clearButton);
//aynı html etiketlerinde kullandığımız gibi # gibi işaretleri kullanarak seçeriz bu getElementById ile seçmel ile aynıdır.

const todoList3 = document.querySelector(".list.group"); //getElementByClassName ile aynı

//class isminden birden fazla olursa quaryselector sadece 1 tanesini getirir.birden fazla olduğunu biliyorsak quaryselectorAll ile çekmemiz lazımdır hepsini almak istiyorsak.

const todoList4 = document.querySelectorAll(".list-group-item")[2];//2. index getirmek
console.log(todoList);


//sayısını bilmediğimiz yerde
const todoList5 = document.querySelectorAll(".list-group-item").length(-1); //kullanabiliriz.

//direkt tüm li leri getirir. getElementByTagName
const todoLisst = document.querySelectorAll("li");
//ilk eleman
const todoList0 = document.querySelectorAll("li:first-child");
//son eleman
const todoList8 = document.querySelectorAll("li:first-child");
//şu sayıdaki çocuk 
const todoList9 = document.querySelectorAll("li:nth-child(1)");
//odd tek çocuklar,even çift çocuklardır.


//mesela bu şekilde stylelarına etki edebiliyoruz.
const todoList7 = Array.from (document.querySelectorAll("li:nth-child(even)"));
todoList7.forEach(function(todoo){
    todo.style.backgroundColor =  "lightgrey";
})