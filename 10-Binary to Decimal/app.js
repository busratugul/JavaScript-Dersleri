/* 


Binary sayıyı sağdan sola 2 üssü yaparak çarparız normal sayının rakamları ile sağdan sola çarparız ve çıkanları toplarız.Toplam decimale eşittir. 


Math.pow ile bir sayının üssünü alabiliriz.*/








let binary = "1011";
let toplam =0;
let ust =0;

function convertBinaryToDecimal(binary){
    for(let i=binary.length-1 ; i>=0 ; i--){
        toplam += Number(binary.charAt(i)) * Math.pow(2,ust);
        ust++;
    }
    console.log("Sonuç : " + toplam);
} 

convertBinaryToDecimal(binary);

