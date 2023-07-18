class MigrosBase {
    indirimOrani = 50;
       
    constructor(isim, soyisim, kartVarMi, urunler){
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarMi = kartVarMi;
        this.urunler = urunler;
}

hesapla(){
    let odenecekTutar = 0;

    if(this.urunleriKontrolEt(this.urunler)){
        //sepet dolu
        if(this.kartVarMi){
            //Money kartı var
            this.urunler.forEach((urun) => {
                odenecekTutar += (urun.fiyat * (100-this.indirimOrani)/100)
            });
        }else{
            //Money kartı yok
            this.urunler.forEach((urun) => {
                odenecekTutar += urun.fiyat;
            });
        }

    }else {//sepet boş
        alert("En az bir tane ürün ekleyiniz.");
    }
    return odenecekTutar;
}

urunleriKontrolEt(urunler){
    if(urunler !=   null && urunler.length > 0){
        return true;
    }
    return false;
    }
}