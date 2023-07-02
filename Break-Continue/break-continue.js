
//BREAK döngüyü tamamen kırmaya yarar.
//CONTINUE döngüyü bir defa kırmaya yarar.

let sayac =1;

while(sayac<=10){
    console.log(sayac);
    if(sayac==8){
        break;
    }
    sayac++;
}

//?CONTINUE
//1 2 3 4 5 6 7 9 10

let number =0;

while(number<=10){
    number++;
    if(number>10){
        break;
    }
    if(number==8){
        continue;
    }
    console.log(number);
}