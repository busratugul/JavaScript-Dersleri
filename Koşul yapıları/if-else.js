/* KOŞUL YAPILARI 

if (koşul){
    //kodlar 
    }

else {
    //kodlar
}
    */
   
// let not = (65);
let not = (35);

if(not>50){
    console.log("Geçtiniz , Notunuz :" + not);
}else{
    console.log("Kaldınız , notunuz :" + not);
}

/* kullanıcıdan aldığımız değerler bize string olarak gelir bu yüzden number ile o stringi integera ceviriyoruz */

let yas = Number(prompt("Yaşınız :"));
let para = Number(prompt("Bütçeniz"));

if(yas>=18 && para>=3000){
    alert("Ehliyet Sınavına Katılabilirsiniz.");
}else{
    alert("Ehliyet Sınavına Katılamazsınız...")
}

