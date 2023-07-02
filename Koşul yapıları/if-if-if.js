/* ÇOKLU IF YAPISI
if(koşul){

} 
if(koşul){
    
} 
if(koşul){
    
} 
bunlar birbirinden tamamen izole olmuştur true false olmaları diğerlerini etkilemez.koşulu sağlayan çalışır.koşulu sağlamayan çalışmaz.*/


/* adını ve tcsini alıcaz 
AD: boş geçilemez
TCKN: 11 karakterden oluşacak
*/
    let ad = prompt("Lütfen isminizi giriniz.");
    let tckn = prompt("Lütfen Tc kimlik numaranızı giriniz.");

check( ad , tckn);

function check(ad , tckn){
    
    if(ad !=""){
        if(tckn.length == 11){
            alert("İşlem Başarılı...");
        }else{
            alert("Lütfen 11 karakterden oluşan bir tckn girin!");
        }
    }else{
        alert("Lütfen İsim Alanını Boş Bırakmayın!!");
    }
}