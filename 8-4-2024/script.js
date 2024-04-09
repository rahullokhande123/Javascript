
// // setInterval Method

// const myinterval =  setInterval(display,3000);
// function display(){
//     document.getElementById("demo").innerHTML += "Hello";
// }
// function stop(){
//     clearInterval(myinterval);
// }

const myinterval = setInterval(display,500);
function display(){
    document.getElementById("demo2").innerHTML = "Happy Birthday";
}
function stop(){
    clearInterval(myinterval);
}

// ================================================
const myinterval2 =  setTimeout(display1,500);
function display1(){
    document.getElementById("demo").innerHTML = "Hello Rahul";
}
function stop2(){
    clearInterval(myinterval2);
}



// ======================================================
// =========================================================
const mytimer = setInterval(timer,1000);
function timer(){
    const date = new Date();
    document.getElementById("demo4").innerHTML = date.toLocaleTimeString();
}
function stop4(){
    clearInterval(mytimer);
}

// ====================================================
const count = setInterval(count1,500);
function count1(){
    document.getElementById("demo3").innerHTML = 0;
}
function stop2(){
    clearInterval(count);
}
/*====================================================*/
const show = setInterval(lokhande,500);
function lokhande(){
    document.getElementById("rahul").innerHTML += "Jay Shree Ram~~";
}
function Bro(){
    clearInterval(show);
}


