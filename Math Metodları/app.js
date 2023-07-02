
/* 
1-Floor 
float değeri integer yapar.Noktadan sonrasını atar.

2-Ceil
noktadan sonrasına bakmadan direkt bir üst sayıya yuvarlar.

3-Round 
noktadan sonrasına bakar ve en yakın integera yuvarlar.

4-Max bir sayı dizisi veririz.bize en büyüğünü döner.
5-Min bir sayı dizisi veririz.bize en küçüğünü döner.

6-Random 0 ile 1 arasında RASTGELE random sayı üretir.
7-Abs Mutlak değerini almak için kullanılır.
8-Sqrt Karekök almak için kullanılır.
9-Pow Üssünü almak için kullanılır.

---> PI Sayisi bu bir özelliktir.
*/

console.log(Math.min(-3,-5,19,46,-59)); //-59
console.log(Math.pow(2,4)); //16

console.log(Math.PI); //3.1415...

console.log(Math.random()*100);
// ondalık sayıdan kurtarmak için 100 ile çarpabiliriz.noktadan sonrasından kurtulmak için de floor,ceil,round kullanabiliriz. bu sayede random bize rastgele sayılar verir.