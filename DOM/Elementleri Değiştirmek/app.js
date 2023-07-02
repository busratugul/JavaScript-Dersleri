//Elementleri Değiştirmek


const cardBody = document.querySelectorAll(".card-body")[1];

const newTitle = document.createElement("h2");
newTitle.className= "card-title";
newTitle.textContent= "Todo Listesi - YENİ";


//eski elementi node tipinde istediği için node tipinde çocukları alalım.
console.log(cardBody.childNodes);//bu chilnodes ile cocukları node tipinde alabiliriz.Çıkan listeden hangisini alacaksak onun indeksini yazarız.

cardBody.replaceChild(newTitle,cardBody.childNodes[1]);//bu şekilde de değiştiririz.