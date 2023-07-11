/* 
AJAX: Tarayıcıdan veri almak için kullanılır.
XMLHttpRequest  ile bir obje oluştururuz.

readyState	Holds the status of the XMLHttpRequest.
0: request not initialized- Daha servera gitmedi iletişim kuruluyo
1: server connection established- server ayakta yayınlandı
2: request received-istek ulaştı
3: processing request- isteği işliyorum
4: request finished and response is ready-işledim cevap hazır

cevabı alabilmek için responsiveText kullanırız.

readyStateChange diye bir event var 0dan 4 e kadar işlerken bir şeyler yaptırabiliriz.


status	200: "OK"-isteğin başarılı bir şekilde gidip döndüğü demektir.
403: "Forbidden"
404: "Page not found" sayfa bulunmadı

statusText	Returns the status-text (e.g. "OK" or "Not Found")

karşıdan veri almak için GET kullanılır.asenkron çalışır true ile belirtiriz.*/




const xhr = new XMLHttpRequest();
console.log(xhr);


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }