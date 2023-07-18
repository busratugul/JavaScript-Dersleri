/* ders ortalaması

vize1 %30 , vize2 %30 , final %40 

mesela %30 demek 100 bölü 3 demektir rasyonel hali 0,3 tür.
eğer vize1den 80 almış olalım bunun 30% unu 80x0,3 ile buluruz.*/


let vize1 = Number(prompt("Vize 1 notunuzu giriniz."));
let vize2 = Number(prompt("Vize 2 notunuzu giriniz."));
let final = Number(prompt("Final notunuzu giriniz."));

// let average = (vize1*0.3) + (vize2*0.3) + (final*0.4);

// if(average>=60){
//     alert("Dersten geçtiniz, Tebrikler :)) ");
//     console.log("Dersten Geçtiniz Tebrikler :)) ");
// }else{
//     alert("Kaldınız , Geçmiş Olsun :(( ");
//     console.log("Kaldınız , Geçmiş Olsun :(( ");
// }

if(final>=50){

let average = (vize1*0.3) + (vize2*0.3) + (final*0.4);  

if(average>=60){
    alert("Dersten " + average + " puan ile geçtiniz, Tebrikler :)) ");
    console.log("Dersten " + average + " puan ile geçtiniz, Tebrikler :)) ");
}else{
    alert(average + " puan ile kaldınız , Geçmiş Olsun :(( ");
    console.log(average + "puan ile kaldınız , Geçmiş Olsun :(( ");
}
}else{
    let average = (vize1*0.3) + (vize2*0.3);
    alert(average + " puan ile kaldınız , Geçmiş Olsun :(( ");
    console.log(average + " puan ile kaldınız , Geçmiş Olsun :(( ");
}