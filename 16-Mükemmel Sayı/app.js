/* Mukemmel Sayı Uygulaması


bölen sayıların toplamı orjinal sayının 2 katına eşitse mukemmel sayıdır.

6 - 24 - 496

*/

let number = Number(prompt("Bir Sayı Giriniz."));
isPerfectNumber(number);


function isPerfectNumber(number){
    let toplam =0;
    for(let i=2; i<=number/2; i++){
        if(number%i==0){
            toplam+=i;
        }

    }
    toplam+=1+number;

    if(toplam == number * 2){
        alert("Mükemmel Sayıdır.");

    }else{
        alert("Mükemmel Sayı Değildir.")
    }

}