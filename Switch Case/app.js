/* switch(deger){
    case 1:
    //kodlar
    break;

    case 2:
    //kodlar
    break;

    case 3:
    //kodlar
    break;

    default:
    //kodlar
    break;

} */

// let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz.")

// switch(sayi){//1 2 3 4 5
//     case "1":
//         console.log("Girilen sayı birdir.");
//         break;

//     case "2":
//         console.log("Girilem sayı ikidir.");
//         break;

//     case "3":
//         console.log("Girilen sayı üçtür.");
//         break;

//     case "4":
//         console.log("Girilen sayı dörttür.");
//         break;
    
//     case "5":
//         console.log("Girilen sayı beştir.");
//         break;

//     default:
//         console.log("Girilen sayı 1 ile 5 arasında olmalıdır!!");
// }

let newLine = "\r\n";
let metin = "1 -Pazartesi"+ 
newLine+ "2 -Salı"+
newLine+ "3 -Çarşamba"+
newLine+ "4 -Perşembe"+
newLine+ "5 -Cuma"+
newLine+ "6 -Cumartesi"+
newLine+ "7 -Pazar"+
newLine+ "Lütfen bir gün seçiniz.";


let deger = prompt(metin);
switch(deger){
    case "1":
        alert("Pazartesi Günü Seçildi.");
        break;

    case "2":
        alert("Salı Günü Seçildi.");
        break;

    case "3":
        alert("Çarşamba Günü Seçildi.");
        break;

    case "4":
        alert("Perşembe Günü Seçildi.");
        break;

    case "5":
        alert("Cuma Günü Seçildi.");
        break;

    case "6":
        alert("Cumartesi Günü Seçildi.");
        break;

    case "7":
        alert("Pazar Günü Seçildi.");
        break;

    default:
        alert("Lütfen sayı cinsinden bir gün seçiniz.");
        break;

}


