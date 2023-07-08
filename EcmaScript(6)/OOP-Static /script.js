

/* STATIC
classları static olarak tanımlarsak nesne türetmeden değişken ve metodlara ulaşabiliriz.

Bir function veya özellik static ise bu classa özgüdür. Değilse nesneye özgüdür.
 */

class Matematik{

    static topla(a,b){
        console.log(a+b)
    }

    cikar(a,b){
        console.log(a-b)
    }

    carp(a,b){
        console.log(a*b)
    }

    böl(a,b){
        console.log(a/b)
    }
}
//constructor tanımlamadıysak parantez içi boş olur.

 //Eğer static tanımlamazsak bu şekilde nesne üreterek erişiriz.
const mat = new Matematik();
//mat.topla(10,5); 
mat.carp(10,5);

 //Eğer static tanımlarsak;
Matematik.topla(10,7) //bu şekilde CLASS İSMİ İLE erişilir. 
