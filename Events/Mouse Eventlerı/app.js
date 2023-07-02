

//MOUSE EVENTLARI

//DOMContentLoaded sayfa yüklendiğinde çalışır.Bir etikete değil direkt documenta yani sayfaya atanır.
//load window objesine tanımlanır.
//click bildiğimiz tıklama
//dbclick çift tıklama
//mouseover mouse üzerine geldiği an hem kodlanan elementte hem de içindeki tüm html etiketlerinde tetiklenir.
//mouseout  mouse üzerinden gittiği an hem kodlanan elementte hem de içindeki tüm html etiketlerinde tetiklenir.
//mouseenter mouse üzerine geldiğinde sadece kodlanan elementte çalışır. İçindeki HTML etiketleri mousedan etkilenmez.
//mouseleave mouse üzerinden gittiğinde sadece kodlanan elementte çalışır. İçindeki HTML etiketleri mousedan etkilenmez.


document.addEventListener("DOMContentLoaded",run);

function run(){
    alert("Sayfa Yüklendi.");
}
//sayfa yüklendiği an hiçbir şey yapmadan çalışan bir eventtır.

window.addEventListener("load",run);
//DOMContentLoaded dan farkı bu document üzerinden atanır bu window üzerinden.

const cardTitle = document.querySelectorAll(".card-title")[1];
cardTitle.addEventListener("click",evnt);



function evnt(e){ //fonksiyonun objesini tanımlıcaz
    console.log (e.type);
}


const cardBody = document.querySelectorAll(".card-body")[1];
cardBody.addEventListener("mouseover",evnt);
//mouse cardbodynin üzerine geldiği an vent çalışır ve cardbody ve içindeki etiketler mouse altındayken biraz büyür.