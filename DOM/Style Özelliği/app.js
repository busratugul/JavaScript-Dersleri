


const todo = document.querySelectorAll(".list-group-item"[0]);

todo.style.color= "white"; //yazı beyaz olur

//her bir HTML elementinin style diye bir objesi vardır.
//CSS özelliklerinde - ile ayrılmaz ikinci kelime büyükle başlar.
//Özelliklere w3s style araması ile bakabiliriz.
//Seçicilerden sonra başarılı şekilde seçip seçmediğimizi kontrol etmek için console.log ile tanımlanan şeyi yazdırırız.

todo.style.backgroundColor= "#fff";
todo.style.fontWeight = "300";
todo.style.paddingTop = "20px";

//Farklı şeyler yakalayarak bunlar üzerinde değişiklik yapabiliriz.

const clearButton = document.querySelector("#todoClearButton");
