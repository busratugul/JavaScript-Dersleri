//ASENKRON PROBLEMI

//http istekleri

const users = [
    {
        id : 5 ,
        post : "Busra Post 1"
    },
    {
        id : 5 ,
        post : "Busra Post 2"
    },
    {
        id : 5 ,
        post : "Busra Post 3"
    },
    {
        id : 6 ,
        post : "Onur Post 1"
    },
    {
        id : 7 ,
        post : "Feyza Post 1"
    },
]

/* 1-user id
   2-post by user id
*/

function getUserId(){
    setTimeout(() => {
        //servise gittik ve cevabı aldık 1sn sürdü.
        return 5;
    },1000)
}

function getPostByUserId(userId){
    console.log(userId);
//Gerçek bir rest apiya istek atacaksınız.
    setTimeout(() => {
        users.forEach((user) => {
            if(user.userId === userId){
                console.log(user.post);
            }
        })
    }, 500);
}

// let userId  = getUserId()
// getPostByUserId(userId)


//output alamadık çünkü önce post fonksiyonu çalışmaya çalıştı ancak çalışması için idye ihtiyaç vardı. İşte gerçek hayatta da bu sekilde rest apidan dönecek bilgilerin süresini assssla tahmin edemeyiz.İnternetimiz,Bilgisayarımız vb. buna etki eder.İşte bu gibi durumlara asenkron problemi denir. Ve düzeltmek için de bunları senkrona çevirmemiz gerekmektedir.


//ASENKRON PROBLEM ÇÖZÜMÜ

function getUserId(callback){
    setTimeout(() => {
        //servise gittik ve cevabı aldık 1sn sürdü.
        let id = 5;
        callback(id)
    },1000)
}

function getPostByUserId(id){
//Gerçek bir rest apiya istek atacaksınız.
    setTimeout(() => {
        users.forEach((user) => {
            if(user.id === id){
                console.log(user.post);
            }
        }) 
    }, 500);
}

getUserId(getPostByUserId);

