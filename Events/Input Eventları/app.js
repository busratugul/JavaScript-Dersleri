

//INPUT EVENTLARI

//focus bir inputa girdiğimizde tetiklenir
//blur bir inputtan çıktığımızda tetiklenir.
//copy
//paste
//cut
//select





const todo = document.querySelector("#todoName");

todo.addEventListener("focus",run);
todo.addEventListener("blur",run)
todo.addEventListener("copy",run);
todo.addEventListener("paste",run);
todo.addEventListener("cut",run);
todo.addEventListener("select",run);



function run(e){
    console.log(e.type);
}

