
// ======================= Promise Methode =====================

// setTimeout(function(){
//     myFunction("I Love JavaScript !!!");
// },3000)
// function myFunction(value){
//     document.getElementById("demo").innerHTML = value;
// }


const myPromise= new Promise(function(myResolve,myReject){
    setTimeout(function(){myResolve("I Love JavaScript !!");},3000);
});

myPromise.then(function(value){
    document.getElementById("demo2").innerHTML = value;
});


