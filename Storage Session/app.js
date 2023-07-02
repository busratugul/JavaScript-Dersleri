

//SESSION STORAGE

//verilerimizi depolamak için kullandığımız yerdir.
//session storagedan veriler silinir ancak local storageden pcyi kapat aç farketmez biz silmeden silinmez.
//session storage

//Değer Ekleme key ve value ister string olarak
sessionStorage.setItem("350","Busra");
sessionStorage.setItem("216","Onur");
sessionStorage.setItem("2022")

//Değer Silme  key ile siler.
sessionStorage.removeItem("216");

//Değer Alma
let value = sessionStorage.getItem("350");
console.log(value);

//Hepsini Silme
sessionStorage.clear();



//Session Storage - Array Yazdırma
let names = ["Busra", "Onur", "Lili", "Lulu"];

sessionStorage.setItem("names",names);
console.log(value);//ancak bize string olarak döner.
//array olarak dönmesi için
sessionStorage.setItem("names",JSON.stringify(names));
let arry = JSON.parse(sessionStorage.getItem("names"));
console.log(value);
//olarak kodlarız.
