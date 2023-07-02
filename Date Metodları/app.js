


let tarih = new Date();
console.log(tarih); //suan ki tarihi alırız

console.log(tarih.getFullYear()); //bir çok get metodu vardır.getDate getDay gethours getMillSeconds getMinutes getMonths(aylar sıfırdan baslıyor 9 eylül degil de ekimdir +1 ile kafa karısıklıgını önleyebiliriz.) toLocalString local tarih saat


//SET METOTLARI
console.log(tarih);//tarih 22 bugunun tarihi
tarih.setDate(24); //24 yap diyoruz
console.log(tarih);//artık tarih 24
//bunlar saat ay dakika olarak da ayarlanabilir.

tarih.setHours(tarih.getHours()+2);
//bu uygulama calıstıgındaki saatin üzerine 2 saat koymaktır.


console.log(typeof tarih);//objedir
console.log(typeof tarih.toString()); //string

let birthday = new Date (1995,02,03,11,03,50);
//dogum gunum bu sekilde spesifik tarih atayabiliriz.