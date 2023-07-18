

let urun1 = {
    isim: "Acer Swift",
    kategori: "Teknoloji",
    fiyat: "6.219"
}
let urun2 = {
    isim: "Acer Nitro 5",
    kategori: "Teknoloji",
    fiyat: "15.475"
}
let urun3 = {
    isim: "Acer Nitro 5",
    kategori: "Teknoloji",
    fiyat: "15.475"
}
let urun4 = {
    isim: "LENOVO V15",
    kategori: "Teknoloji",
    fiyat: "10.999"
}
let urun5 = {
    isim: "Acer Nitro 5",
    kategori: "Teknoloji",
    fiyat: "15.475"
}
let urun6 = {
    isim: "LENOVO V14",
    kategori: "Teknoloji",
    fiyat: "4.399"
}
let urun7 = {
    isim: "Acer Nitro 5",
    kategori: "Teknoloji",
    fiyat: "15.475"
}
let urun8 = {
    isim: "LENOVO Idepad",
    kategori: "Teknoloji",
    fiyat: "4.399"
}
let urun9 = {
    isim: "MacBook Air13",
    kategori: "Teknoloji",
    fiyat: "24.485"
}
let urun10 = {
    isim: "MacBook Pro 13.3",
    kategori: "Teknoloji",
    fiyat: "34.990"
}

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6, urun7, urun8, urun9, urun10];
filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Aradığınız ürünü giriniz");

function getFiltreliUrunler(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)){
            filtreliUrunler.push(urun);
        }
    });
}

function writeFiltreliUrunler(urunler) {
    urunler.forEach(function (urun) {
        console.log("----------------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("----------------------------------------");
    });
}
getFiltreliUrunler(urunler);
writeFiltreliUrunler(filtreliUrunler);
