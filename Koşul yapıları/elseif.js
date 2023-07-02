/* else if birden fazla ihtimal olduğunda kullanılır. istediğimiz kadar kullanırız. her zaman sadece bir tanesi çalışır. 

if(koşul){
    //kodlar
}
else if(koşul){
    //kodlar

else if(koşul){
    //kodlar
}

else{
    //kodlar
}*/


let secilenYol = prompt("Lütfen gitmek isrdiğiniz yolu seçiniz :");

if(secilenYol==1){
    alert("Seçilen yol " + secilenYol+ " . yoldur.");
}
else if(secilenYol==2){
    alert("Seçilen yol" + secilenYol+ " . yoldur.");
}
else if(secilenYol==3){
    alert("Seçilen yol" + secilenYol+ " . yoldur.");
}
else{
    alert("Lütfen Geçerli Bir Yol Seçiniz!")
}