

//==========================================================================================================

//=================== Quastion 1 ===================
// function delayedGreeting(name,delay){
//     setTimeout(function(){
//         console.log("Hello" +" "+ name);
//     },delay);
// }
// delayedGreeting("Rahul",7000);

function practic(){
    setTimeout(function(){
        document.getElementById('demo').innerHTML = "Hello" +" "+ "Rahul";
    },2000);
}
practic();


//=================== Quastion 2 ===================

// function countdown(seconds){
//     let timer = setInterval(function(){
//     if (seconds === 0){
//         clearInterval(timer);
//         console.log("Countdown complete!");
//     }
//     else {
//         console.log(seconds);
//         seconds--;
//     }},1000);
// }
// countdown(5);
function countdown(tm){
    let timer=setInterval(function(){
        if(tm===0){
            clearInterval(timer);
            document.getElementById('demo2').innerHTML="Complite";
        }
        else{
            document.getElementById('demo2').innerHTML=tm;
            tm--;
        }
    },1000);
}
countdown(10);


//=================== Quastion 3 =====================

// function repeatMessage(message,times){
//     let count =0;
//     function displayMessage(){
//         console.log(message);
//         count++;
//         if(count === times){
//             clearInterval(timer);
//         }
//     }
//     let timer= setInterval(displayMessage,1000);
// }
// repeatMessage('Hello',3);

function repeatMessage(message,times){
    let count=0;
    function displayMessage(){
        console.log(message);
        count++;
        if(count===times){
            clearInterval(timer);
        }
    }
    let timer=setInterval(displayMessage,1000);
}
repeatMessage("Hello",3);


