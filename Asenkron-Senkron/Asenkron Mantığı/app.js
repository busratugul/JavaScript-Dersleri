/* 

senkron programlama: sıra ile çalışır. Biri bitince diğeri başlar.
asenkron programlama : ikisi aynı anda çalışır.
yani asenkron daha kullanışlı daha kısa sürede yazılır.

Javascript senkron çalışan bir programlamadır.Yani biri biter diğeri başlar.

Asenkron Çalışmasına sebep olanlar
1- TIMING 
2-EVENTLAR
3-HTTP İSTEKLERİNDE

---Callback - Promise - ASYNC & AWAIT ile asenkron yapıları senkrona çevirip yönetiyoruz.

web api tarafında yönetilen her şey asenkron çalışır.modzilladan bakabiliriz.
 */

console.log("Busra"); //senkron

setTimeout(() => {
        console.log("1000 ms süre Doldu ve Çalıştı."); //asenkron
},1000);

setTimeout(() => {
        console.log("500ms bekledi ve çalıştı"); //asenkron
} ,500);

setTimeout(() => {
        console.log("750ms bekledi ve çalıştı"); //asenkron
}, 750);

console.log("Tugul"); //senkron