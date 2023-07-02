/* DO-WHILE


do
//kodlar

}while(koşul);

derleyici yukardan aşağıya derlediği için koşulu daha görmez. ve while koşulu yanlş olsa bile bir kere çalışır.

*/

let sayac = 1;

do {
    console.log(sayac);
    sayac++;
} while (sayac<=10);


let yas = 23; //koşul sağlamadığı halde döngü 1 kere çalıştı.

do{
    console.log("Ehliyet Alabilirsiniz.");
   
}while(yas>=25);


//1 den 20ye kadar olan tek sayıların toplamı
let sayi = 1;
let toplam = 0;
do {
    if(sayi%2==1){
        toplam+=sayi; 
    }
    sayi++;
} while (sayi<=20);

console.log("Toplam : " , toplam);
