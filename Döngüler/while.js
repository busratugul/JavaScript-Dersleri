/* 
WHILE DONGUSU


While(koşul){
    //kodlar

    //sayacın degerini atarız

} */

//1den 10a kadar yazdıralım

let sayac  = 1;
while(sayac<=10){

    console.log(sayac);

    sayac++;

}

//1den 10 Kadar çiftleri yazdıralım

let i = 0;
while(i<=10){
    if(i%2 == 0){
        console.log(i);
}
i++;
}

let a = 0;
while(a<=10){
    if(a%2 == 1){
        console.log(a);
    }
a++;
}


//while(true)
let e = 1;
while(true){
    console.log(e);
    if(e == 7){
        break;
    }
    e++;
}

