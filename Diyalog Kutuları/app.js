/* DIYALOG KUTULARI 

-Alert   ikaz veya mesaj bermek için kullanılabilir.
-Prompt  kullanıcıdan değer almaya yarar.
-Confirm onaylamak demektir.kullanıcının onyını almak için kullanılır.

*/

console.log(window);

/* eger bir obje window içinde konumlanmışsa onlara console yazmadan direkt window içinde erişebiliriz. */

/* alert*/

alert("İşleminize Devam Etmeden Önce Kaydetmelisiniz....");


/* prompt */

let isim = prompt("İsminizi Giriniz :" );
console.log(isim)


let yas = prompt ("(Yaşınızı Giriniz :" );
console.log("İsminiz : " + isim);
console.log("Yaşınız : " + yas);

/* kullanıcıdan alınan tum degerler her zaman stringtir. */
console.log(typeof isim);
console.log(typeof yas);

/* Confirm Onaylamak demektir */

let sonuc = confirm("Silmek istediğinize emin misiniz?");
console.log(sonuc);

/* kullanıcı eger tamama basarsa true hayıra basmıssa false döner */