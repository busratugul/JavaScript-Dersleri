
let mesaj = 
`
Migrosa Hoşgeldiniz.
Money Kartınız Var mı ?
1- Evet    2- Hayır
`;

const urunler = [
    {
        urunIsmi : "Süt",
        fiyat : 15
    },
    {
       urunIsmi : "Bebek Bezi" ,
       fiyat : 100
    },
    {
        urunIsmi : "Kuşbaşı",
        fiyat : 220
    }
]

let sonuc = confirm(mesaj)
let odenecekTutar;

//true || false
if(sonuc){
    //Money kartı var
    let isim = prompt("Adınızı Giriniz :");
    let soyisim = prompt("Soyisminizi Giriniz :");

    const musteri = new Musteri (isim,soyisim,sonuc,urunler);

    odenecekTutar = musteri.hesapla();

    alert(
        `Müşteri Bilgileri : ${musteri.isim} ${musteri.soyisim}
         Ödenecek Tutar : ${odenecekTutar}
        `);
}else{
    //Money kartı yok
    const musteri = new Musteri(null, null , sonuc, urunler );
    odenecekTutar = musteri.hesapla();
    alert(
        `Ödenecek Tutar : ${odenecekTutar}
        `)
        
    }
