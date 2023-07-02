/* Var- Let - Const

---scope-- türkçede kapsam anlamına gelmektedir.

global scope : en geniş her yerden erişilebilen scopelardır.tanımlanan değişken asla kıvırcık parantez içinde olmamalıdır. yoksa global scope olmaz.


function scope : tanımlandığı zaman sadece kendi kıvırcık parantezleri içerisinde erişilebilir.


block cope: function methodu içinde tanımlanan if,else,while gibi elemantlerin de içinde tanımlanan değişkenlerdir ve sadece kendi kıvırcık parantezleri içinde erişelebilir.
*/

var degiskenIsmi = 10;

console.log(degiskenIsmi);

var a = 5;

if(true){
        console.log(a);
}

var b= 12;

function method1(){
   var sayi= 10;
   console.log(b);
   console.log(sayi);
}


method1();
    
function method2(){
    if(true){
        var b=9; 
        console.log(b);
    }
}

method2(b);

/* js de int, float gibi tip olarak değişken tanımlamak yoktur.

var/let/const degiskenIsmi = degiskenDegeri 

var : ile tanımlanan her şey function scope olur.yani mesela if içinde block scope olan bir değişkeni var ile tanımlarsak artık function scope olur.hem block içinden hem de function içinde erişilebilir olur .Ancak bu var değişkenleri ram bellekte çok fazla yer kaplar.

let/conct : block scope özelliğine sahiptir.
*/

function selamVer(){
    var selam = "Herkese Selam"; //function scope
    if(true){
        var b = 10;  //function scope//
    
    }
    console.log(selam);
}
 selamVer();

 function selamVer(){
   var selam = "merhabalar"; //function scope
    if(true){
        let b = 10;  //block scope//
        console.log(b);
    }
    console.log(selam);
}


 selamVer();
 


 var a = "busra";// eger bu değişkeni a ile tanımlasak değiştiremezdik//
 var a = "onur";
 console.log(a);

 //yani var ile aynı değişken isminden birçok yanımlama yapabiliriz yani değişkeni değiştirebiliriz. Ancak let değiştirilemez ve aynı değişken ismi olamaz.ancaL global scope olmayan yani block olan letler değişebilir.const da kesinlikle değişmez //

 const user = {
    username : "busra",
    password :"123"
 }

 //user= {age : 23 } // içindekiler değişmez çünkü const var yeni bir değer daha tamaya çalışamazsın diyor yani user= den sonra bir şey yapamayız ancak user.username = "busratugul" dersek değişebilir. //

 console.log(user);



 
 let user1 = {
    username : "busra",
    password :"123"
 }
 user1= {age : 23 }//burada username ve password gitti yerine age 23 koyuldu let içindeki elemanların değişmesine izin verir.// 
 