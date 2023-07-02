/* 

ARRAYS - DİZİLER

-kutu parantez ile kullanılır.
-farklı veri tipleri tek bir dizi içinde tutulabilir.
-elemanlar index ile yakalanır. sıfırdan başlar.
-Eğer dizide olmayan bir elemanı seçmeye çalışırsak ArrayIndexOutOfBoundException uyarısı jsde undefined uyarısı gelir.
-indexler ile değerleri değiştirebiliriz.
*/

let numbers = [0,1,2,3,4,5,"Busra",6,7,8,9,"Onur"];

console.log(numbers[6]);

numbers[10]="Tuğul";
console.log(numbers[10]);

//indexleri tek tek saymaya gerek yok mesela 
//numbers[numbers.length-1] = "Tuğul";
//demek zaten son index demektir.

let names = ["Onur","Büşra","Belkız","Feyza"];
console.log(names[2]);

names[2] = "Nesliş";
console.log(names[2]);
console.log(names);


//karışık array
let mix = [1,"Busra",5.7, true, null, undefined];
console.log(mix[3]);

