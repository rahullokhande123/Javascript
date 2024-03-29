function display(){
    alert("Hello Dear");
};
let x= document.getElementById("mybtn");
x.addEventListener('click',function(){
    alert("This is an addEventListener");
})

// ==================== Second Way Of Tag EventListener ===========================

x.addEventListener("mousemove",myfunction);

function myfunction(){
    document.getElementById("demo").innerHTML = Math.random();
}
// =========================== How to remove EventListener
function remove(){
    x.removeEventListener("mousemove",myfunction);
}
// ================================================
function result(){
    let y = document.getElementById("myinput").value;
    document.getElementById("demo").innerHTML = y;
}
