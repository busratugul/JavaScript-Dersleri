//Eventlere eventin gercekleseceği HTML etiketinin yanından erişilir.
//'' tek tırnaklar içerisine yazılır.

// eventin nerede olmasını istiyorsak o HTML etiketinin yanına onclicki bir attribute olarak ekleriz. mesela;
//!    <a href= "#" onclick="alert('MERHABA')"> link </a>


// bu; bu a etiketine tıklandığında merhaba yaz demektir.

 //! <a href= "#" onclick= "this.textContent='busra'" > link </a>
//this su an calıstıgım html etiketinin demektir.Burada da bu etikete tıklandığında yazısı busra olur.

//! <a href= "#" onclick= "document.querySelectorAll('.card-title').textContent='ToDo Başlığı Değişti.'> link </a>

//bu tarz kodlar kullanılmaz. Çünkü 15-20 satırlık kodlarla HTML sayfamız çorba olur.Bu yüzden fonksiyon tanımlarız.Mesela;

//! <a href= "#" onclick= "changeTitle()" </a>

function changeTitle(){
     "document.querySelectorAll('.card-title').textContent='ToDo Başlığı Değişti.'> link";
     console.log("Başlık Değişti");
}

//daha profesyonel kullanım için 
//addEventListener() metodunu kullanmalıyız. Event atayabildiğimiz bir metoddur.
//önce event ekleyeceğimiz yeri yakalarız.

const clearButton = document.querySelector("#todoClearButton"); 
clearButton.addEventListener("click",function(){
    alert("Merhaba");
});

//daha da güzeli ise :))

const clearrButton = document.querySelector ("");

clearrButton.addEventListener("click", changeTitle);

function changeTitle(){
    document.querySelectorAll('.card-title')[1].textContent="ToDo Başlığı Değişti.";
}

//bir eventin objesini yani bilgisini alabilmek için çalışan metodun parametresi ile yakalarız.Genl olarak bune e denir event denir.

function changeTitle(e){
    console.log(e);
    console.log(type);//eventin türü
    console.log(e.target); //hangi html elementinde
    console.log(e.target.textContent);//texti
    console.log(e.target.className);//classı
    //daha böyle bir çok bilgiyi alabiliriz.
}