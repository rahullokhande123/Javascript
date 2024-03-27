function display(){
    alert("This is a evant");
}
// let mybtn = document.getElementById("btn");
// mybtn = document.addEventListener("click",()=>{
//     alert("This is also another event");
// });
// ======================= Second Method=============

document.getElementById("btn").addEventListener("click",display1);
// function display1(){
//     alert("This is also an event");
// }

// ======================================================

let mydate = new Date();
function display1(){
    document.getElementById("demo").innerHTML = mydate;
}