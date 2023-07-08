

class Insan{
    constructor(){ //yapıcı metod
        console.log("Yapıcı Metod çalıştı");
    }
}
/* 
Sınıfın içinde
1-Özellikler
2-Yapıcı Metod
3-Function

constructor birden fazla parametre alabilir.Bir sınıftan nesne türetirken bir sınıfın içindeki değişkenlere tanımlanmıs metodlara erişip kullanabilmek için o sınıftan nesne oluşturmak gerekmektedir bunu da new ile oluştururuz.Nesne oluştururken constructor çalışır. Sonrasında metodları kullanabiliriz.
*/
//nesne olusturmak
const insan1 =new Insan();
const insan2 = new Insan();


class Human{
    constructor(isim,soyisim,yaş,maaş){
        this.name = isim //sınıf içinde bir değişken tanımlamak
        this.surname = soyisim;
        this.age = yaş;
        this.salary = maaş;
    }

    bilgileriGoster(){
        console.log(`
                     Isim : ${this.name}
                     Soyisim : ${this.surname}
                     Yaş : ${this.age} 
                     Maaş : ${this.salary}`
                    )
    }
}

const human1 = new Human ("Busra", "Tugul", "28", "40.000")
human1.bilgileriGoster()

console.log(human1.name) //Busra